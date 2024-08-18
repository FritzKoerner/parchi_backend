const express = require("express");
const { listProjects, readProjectImages } = require("./projects");
const app = express();
const port = 3030;

// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  // Pass to next layer of middleware
  next();
});

app.get("/projects", (req, res) => {
  const arrProjects = listProjects();
  res.send(arrProjects);
});

app.get("/projects/:id", (req, res) => {
  const images = readProjectImages(req.params.id);
  res.send(images);
});

app.use("/projectFiles", express.static("uploads/projects"));

app.listen(port, () => {
  console.log(`parchi backend listening on localhost:${port}`);
});
