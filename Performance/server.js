const http = require("http");
const cluster = require("cluster");

const app = require("./app");
const PORT = 8080;

const server = http.createServer(app);

if (cluster.isMaster) {
  cluster.fork();
  cluster.fork();
} else {
  server.listen(PORT, (err, res) => {
    console.log(`working on port ${PORT}`);
  });
}

// server.listen(PORT, (err, res) => {
//   console.log(`working on port ${PORT}`);
// });
