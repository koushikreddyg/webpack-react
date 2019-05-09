exec("git remote remove origin", () => {
    console.log("git remote url removed");
    process.exit(1);
  });