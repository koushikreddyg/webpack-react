// const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

bcrypt.hash("myPlaintextPassword", 10).then(hash => {
  bcrypt.compare("myPlaintextPassword", hash).then(response => {
    console.log(response);
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
