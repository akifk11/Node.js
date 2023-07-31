const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return;
  }
  if (req.url === "/about") {
    res.end("here is our short history");
    return;
  }
  res.end(`
  <h1>Ooops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back homepage</a>
  `);
  //   console.log(req);
  //   res.write("Welcome to our home page");
  //   res.end();
});

server.listen(5000);
