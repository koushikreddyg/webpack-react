require("@babel/register")({
  presets: ["@babel/preset-env"],
  plugins: [
    [
      "babel-plugin-transform-require-ignore",
      { extensions: [".less", ".css", ".scss", ".png", ".pdf"] }
    ],
    ["@babel/transform-modules-commonjs", { loose: true }]
  ]
});
require("./src/SSR/server.js");
