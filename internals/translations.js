const fs = require("fs");
const path = require("path");
const { get } = require("lodash");
const { transform } = require("@babel/core");
const nodeGlob = require("glob");

const lang = ["en", "de", "es"];

const filePath = type =>
  path.join(__dirname, "..", "src", "translations", `${type}.json`);

const FILES_TO_PARSE = path.join(__dirname, "..", "src", "**", "!(*.test).js");

const finalOutput = { en: {}, es: {}, de: {} };

const readFile = inputUrl =>
  new Promise((resolve, reject) => {
    fs.readFile(inputUrl, "utf8", (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });

const writeFile = (fileUrl, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(
      fileUrl,
      JSON.stringify(data, null, 2),
      "utf-8",
      (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      }
    );
  });

const glob = files =>
  new Promise((resolve, reject) =>
    nodeGlob(files, (err, res) => (err ? reject(err) : resolve(res)))
  );

const getLangData = async filename => {
  const code = await readFile(filename);

  const output = await transform(code, {
    filename,
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false
        }
      ],
      "@babel/preset-react"
    ],
    plugins: ["react-intl"]
  });

  const messages = get(output, "metadata.react-intl.messages", []);

  if (messages.length) {
    messages.forEach(({ id, defaultMessage }) => {
      lang.forEach(language => {
        let obj = {};
        if (!Object.keys(finalOutput[language]).find(key => key === id)) {
          obj = {
            ...finalOutput[language],
            [id]: language === "en" ? defaultMessage : ""
          };
          finalOutput[language] = obj;
        }
      });
    });
  }
};

const restoreOldMessages = () => {
  lang.forEach(language => {
    readFile(filePath(language)).then(response => {
      finalOutput[language] = JSON.parse(response, null, 2);
    });
  });
};

restoreOldMessages();

glob(FILES_TO_PARSE).then(files => {
  const langFiles = Promise.all(files.map(file => getLangData(file)));
  langFiles.then(() => {
    lang.forEach(language => {
      writeFile(filePath(language), finalOutput[language]);
    });
  });
});
