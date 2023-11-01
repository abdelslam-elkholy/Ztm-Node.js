const http = require("http");

const app = require("app");
const PORT = 8080;

const server = http.createServer(app);

server.listen(PORT, (err, res) => {
  console.log(`working on port ${PORT}`);
});
