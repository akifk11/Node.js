const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
    return;
  }
  if (req.url === "/about") {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        console.log(`${i} ${j}`);
      }
    }

    res.end("About page");
    return;
  }
  res.end("error page");
});

server.listen(5000, () => {
  console.log("Server Listening on port 5000");
});
