const { exec } = require("child_process");

exec("npm -v", (err, std) => {
  if (err) throw err;
  if (parseFloat(std) < 6) {
    // throw new Error("check the npm version");
  }
});
