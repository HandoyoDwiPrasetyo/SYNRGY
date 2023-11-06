const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const { PORT = 8000 } = process.env;

const PUBLIC_DIRECTORY = path.join(__dirname, "public");

function getHtml(fileName) {
  const htmlFilePath = path.join(PUBLIC_DIRECTORY, fileName);
  return fs.readFileSync(htmlFilePath);
}

function getContent(filename) {
  const filePath = path.join(PUBLIC_DIRECTORY, filename);
  try {
    // Membaca isi berkas yang sesuai dengan nama berkas (misalnya, index.html, style.css, script.js)
    const content = fs.readFileSync(filePath);

    return content;
  } catch (error) {
    // Handle kesalahan jika berkas tidak ditemukan
    console.error(`Error reading file: ${error}`);
    return "Internal Server Error";
  }
}

const server = () => {
  return (req, res) => {
    const parsedUrl = url.parse(req.url, true);

    const { pathname } = parsedUrl;

    console.log(pathname);

    const isCss = pathname.includes("/css");
    const isJs = pathname.includes("/script");
    const isImages = pathname.includes("/images");

    if (pathname === "/") {
      const pageContent = getHtml("index.html");
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(pageContent);
    } else if (isCss || isJs || isImages) {
      // const extname = path.extname(pathname);
      // if (extname === ".jpg") {
      //   res.setHeader("Content-Type", "image/jpg");
      // }
      res.end(getContent(pathname));
    } else {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(404);
    }
  };
};

http.createServer(server()).listen(PORT, "localhost", () => {
  console.log("Server is running, open http://localhost:%d", PORT);
});
