const http = require("http");
const port = 3000;

const server = http.createServer();
const friends = [
  { id: 1, name: "Friend1" },
  { id: 2, name: "Friend2" },
  { id: 3, name: "Friend3" },
];

server.on("request", (req, res) => {
  const reqItemes = req.url.split("/");
  console.log(reqItemes);

  if (reqItemes[1] === "freinds") {
    if (req.method === "GET") {
      if (reqItemes.length === 2) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(friends));
      } else if (reqItemes.length === 3) {
        const id = reqItemes[2] * 1;
        console.log(id);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            freinds: friends.filter((friend) => friend.id === id),
          })
        );
      }
    } else if (req.method === "POST") {
      req.on(
        "data",
        (data) => {
          friends.push(JSON.parse(data));
        },
        req.pipe(res)
      );
    }
  } else if (req.url === "message") {
    req.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Hey From server!</h1>");
    res.write("<ul>");
    res.write("<li>Mango</li>");
    res.write("<li>Poly</li>");
    res.write("<li>Ajax</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
