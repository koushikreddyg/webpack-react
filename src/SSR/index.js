require("@babel/register")({
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false
      }
    ]
  ],
  plugins: [
    [
      "babel-plugin-transform-require-ignore",
      { extensions: [".less", ".css", ".scss", ".png", ".pdf", "index.js"] }
    ],
    ["@babel/transform-modules-commonjs", { loose: true }]
  ]
});
require("./server");
