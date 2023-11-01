const http = require("http");
// const cluster = require("cluster");
// const os = require("os");

const app = require("./app");
const PORT = 8080;

const server = http.createServer(app);

// if (cluster.isMaster) {
//   const cpus = os.cpus().length;
//   console.log(os.cpus().length);

//   for (let i = 0; i < cpus; i++) {
//     cluster.fork();
//   }
// } else {
//   server.listen(PORT, (err, res) => {
//     console.log(`working on port ${PORT}`);
//   });
// }

server.listen(PORT, (err, res) => {
  console.log(`working on port ${PORT}`);
});
