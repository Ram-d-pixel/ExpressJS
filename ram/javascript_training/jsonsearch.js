const fs = require("fs");
const path = require("path");

const dir = "ram/javascript_training/H2G";
var fileContents;
var json;
var files;

function findJsonFileByName(dir, name) {
  files = fs.readdirSync(dir); // Get a list of all files in the directory
  // Iterate over each file
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (file === name) {
      fileContents = fs.readFileSync(filePath, "utf-8");
      json = JSON.stringify(JSON.parse(fileContents), null, "\t");
      return json;
    }
  }
  return null;
}

async function runJson(name) {
  return findJsonFileByName(dir, name);
}
async function allFiles() {
  const fileNames = JSON.stringify(files, "\t");
  return fileNames;
}

module.exports = { runJson, allFiles };
