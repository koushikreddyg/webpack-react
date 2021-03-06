require("@babel/register")({
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    [
      "babel-plugin-transform-require-ignore",
      { extensions: [".less", ".css", ".scss", ".png", ".pdf"] }
    ],
    ["@babel/transform-modules-commonjs", { loose: true }]
  ]
});

require("./server");
