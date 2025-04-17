// const http = require("http");

// const todos = [
//   { id: 1, text: "todo one" },
//   { id: 2, text: "todo two" },
//   { id: 3, text: "todo three" },
// ];

// const server = http.createServer((req, res) => {
//   const { method, url } = req;
//   let body = [];
//   req
//     .on("data", (chunk) => {
//       body.push(chunk);
//     })
//     .on("end", () => {
//       body = Buffer.concat(body).toString();

//       let status = 400;
//       const response = {
//         success: false,
//         data: null,
//       };

//       if (method === "GET" && url === "/todos") {
//         status = 200;
//         response.success = true;
//         response.data = todos;
//       } else if (method === "POST" && url === "/todos") {
//         const { id, text } = JSON.parse(body);
//         todos.push({ id, text });
//         if (!id || !text) {
//           status = 400;
//         } else {
//           status = 201;
//           response.success = true;
//           response.data = todos;
//         }
//       }

//       res.writeHead(status, {
//         "content-type": "application/json",
//         "X-Powered-By": "Node.js",
//       });

//       res.end(JSON.stringify(response));
//     });
// });

// const PORT = 5001;

// server.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const app = express();

PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
