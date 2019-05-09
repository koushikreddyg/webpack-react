const { exec } = require("child_process");

exec("git remote remove origin", () => {
    console.log("git remote url removed");
    process.exit(1);
  });
