const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Connected nodemon to backend in react todo app");
});

server.listen(process.env.PORT || 3000);
