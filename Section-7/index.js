const http = require("http");
const port = 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/freinds") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ freinds: ["Mango", "Poly", "Ajax"] }));
  } else if (req.url === "/message") {
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
