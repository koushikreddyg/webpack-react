const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://koushik:password@ds213239.mlab.com:13239/practicemongo11",
  {
    useNewUrlParser: true
  },
  err => {
    if (err) {
      console.log("connection failed");
    } else {
      console.log("connection succeded");
    }
  }
);

module.exports = { mongoose };
