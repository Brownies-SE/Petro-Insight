const xlsx = require("xlsx");
const prompt = require("prompt-sync")();
const fs = require("fs");
const path = require("path");
const dadSheetArr = ["Pending_Permits", "Spud_Data", "Well_Status"];

const input = prompt("What is your Filename? ");
console.log(`Filename is: ${input}`);

const dir = `./resources`;

//const input2 = prompt("What is the sheet name? ");

const workbook = xlsx.readFile(`${dir}/${input}`, {
  dateNF: "mm/dd/yyyy",
});

console.log(workbook.SheetNames);
const workbookSheetNames = workbook.SheetNames;
workbookSheetNames.forEach((sheet) => {
  const worksheet = workbook.Sheets[sheet];
  const data = xlsx.utils.sheet_to_json(worksheet, { raw: false });

  console.log(data);
  let json = JSON.stringify(data)
    .replace(/(\s{2,})|(\s+(?=([\w\s]*[":][^,])))/g, "")
    .trim();
  fs.writeFileSync(`./server/seeds/${sheet}.json`, json);
});

// fs.close(workbook);

// const data = xlsx.utils.sheet_to_json(worksheet, { raw: false });

// console.log(data);
// let json = JSON.stringify(data)
//   .replace(/(\s{2,})|(\s+(?=([\w\s]*[":][^,])))/g, "")
//   .trim();
// fs.writeFileSync(`./server/seeds/${input2}.json`, json);

// const newWorkBook = xlsx.utils.book_new();
// const newWorkSheet = xlsx.utils.json_to_sheet(data);
// xlsx.utils.book_append_sheet(newWorkBook, newWorkSheet, "New Data");

// xlsx.writeFile(newWorkBook, "New Data File.xlsx");
