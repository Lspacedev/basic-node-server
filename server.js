const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  //set header content-Type
  res.setHeader("content-Type", "text/html");
  res.write("<p>Hello world</p>");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
