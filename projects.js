const fs = require("fs");
const path = require("path");

exports.listProjects = function listProjects() {
  const projectsPath = path.join("uploads", "projects");
  return fs.readdirSync(projectsPath);
};

exports.readProjectImages = function readProjectImages(folderName) {
  const folderPath = path.join("uploads", "projects", folderName);
  if (!fs.existsSync(folderPath)) {
    throw new Error(`404: Path does not exist: ${folderPath}`);
  }
  const files = fs.readdirSync(folderPath);
  const regexImages = new RegExp("([/|.|w|S|-])*.(?:jpg|gif|png|jpeg)");
  const images = files.filter((file) => file.match(regexImages));
  return images;
};
