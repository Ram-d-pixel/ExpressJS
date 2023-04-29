/* 
Excel to JSON
*/

const xlsx = require("xlsx");
const fs = require("fs");
const filename = "ram/javascript_training/testdata/";
const jsonPath = "ram/javascript_training/H2G/";
const path = require("path");
var wbook;
var sbook;
var jsonContent;

/*
Function to read the excel data and convert it to JSON
 */
async function readFile(filename) {
  fs.readdir(filename, (err, files) => {
    if (err) return err;
    if (!files) return null;
    // Loop through each file in the directory
    files.forEach((file) => {
      // Check if the file is an Excel file
      if (path.extname(file) === ".xlsx") {
        wbook = xlsx.readFile(path.join(filename, file));
        const sheetname = wbook.SheetNames; //gives array of all sheet name available on workbook
        for (var sheetindex in sheetname) {
          sbook = wbook.Sheets[sheetname[sheetindex]];
          var jsonFileName = `${jsonPath}${sheetname[sheetindex]}.json`;
          jsonContent = xlsx.utils.sheet_to_json(sbook);
          const writeData = JSON.stringify(jsonContent);
          fs.writeFileSync(jsonFileName, writeData);
        }
      }
    });
  });
}
async function run() {
  await readFile(filename);
  //return null
  return "File created and data written successfully!";
}

module.exports = { run };
