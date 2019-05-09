const { exec } = require("child_process");

exec("npm -v", (err, std) => {
  if (err) throw err;
  if (parseFloat(std) < 6) {
    console.error("node version is below 6");
    process.exit(1);
  }
});

exec("git remote remove origin", (err) => {
  console.log("git remote url removed");
  process.exit(1);
});

if (process.env.npm_execpath.indexOf("yarn") > -1) {
  console.error("You must not use Yarn to install dependencies:");
  process.exit(1);
}
