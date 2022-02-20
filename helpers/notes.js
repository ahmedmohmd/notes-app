const { readFileSync, writeFileSync } = require("fs");
const rootDir = require("./paths");
const path = require("path");

const dataPath = path.join(rootDir, "data", "notes.json");

const loadNotes = () => {
  try {
    const jsonData = readFileSync(dataPath);
    const data = JSON.parse(jsonData.toString());
    return data;
  } catch (error) {
    return [];
  }
};

const saveNotes = (notes) => {
  const newJsonData = JSON.stringify(notes);
  writeFileSync(dataPath, newJsonData);
};

module.exports = { loadNotes, saveNotes };
