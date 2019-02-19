// const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

bcrypt.hash("myPlaintextPassword", 10, (err, hash) => {
  if (err) {
    return console.log(err);
  }
  bcrypt.compare("myPlaintextPassword1", hash, (err, res) => {
    if (err) {
      return console.log(err);
    }
    console.log(res);
  });
});

// var token = jwt.sign("Koushik@143", "shhhhh");

// console.log(token);

// jwt.verify(token, "shhhhh", (err, decoded) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(decoded);
// });
