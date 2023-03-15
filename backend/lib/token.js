// import dotenv from "dotenv";
// dotenv.config();


// import jwt from "jsonwebtoken";



// function signToken(payload) {

//     const token = jwt.sign(
//         payload,
//         process.env.TOKEN_SECRET,
//         {
//             expiresIn: process.env.TOKEN_EXPIRESIN,
//             algorithm: "HS512",
//         });

  
//     return token;
// }

// function verifyToken(token) {
//     try {
     
//         const verified = jwt.verify(token, process.env.TOKEN_SECRET);
//         console.log(verified);
//     } catch (error) {
//         console.error(error.message);
//     }
// }


// const payload = {
//     userId: 2,
//     name: "Dominik",
// };

// const token = signToken(payload);
// console.log(token);

// setTimeout(() => verifyToken(token), 2000);
