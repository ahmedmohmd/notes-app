const chalk = require("chalk");
const { loadNotes, saveNotes } = require("../helpers/notes");
const Table = require("cli-table");

// Add function
const addNote = (note) => {
  const notes = loadNotes();
  const notesTitles = notes.map((note) => note["title"]);

  if (!notesTitles.includes(note.title)) {
    notes.push(note);
    saveNotes(notes);
    console.log(chalk.greenBright("✅ Note is added successfully..."));
  } else {
    console.log(
      chalk.redBright(
        "❌ The Note that you try to add already exists, Please try again with a different Title."
      )
    );
  }
};

// Remove function
const removeNote = (title) => {
  const notes = loadNotes();
  const notesTitles = notes.map((note) => note["title"]);

  if (notesTitles.includes(title)) {
    const filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    console.log(chalk.greenBright("✅ Note is removed successfully..."));
  } else {
    console.log(
      chalk.redBright(
        "❌ The Note that you try to remove does not exist, Enter a valid Note Title."
      )
    );
  }
};

// Read function
const readNote = (title) => {
  const notes = loadNotes();
  const notesTitles = notes.map((note) => note["title"]);

  if (notesTitles.includes(title)) {
    let theNote = notes.find((note) => note.title === title);
    const table = new Table();
    let titleWord = chalk.yellowBright("Title:");
    let contentWord = chalk.yellowBright("Content:");

    table.push(
      { [titleWord]: theNote.title },
      { [contentWord]: theNote.content }
    );

    console.log(table.toString());
  } else {
    console.log(chalk.redBright("❌ Note desn't exists!"));
  }
};

// Edit function
const editNote = (title, newNote) => {
  const notes = loadNotes();
  const copyNote = [...notes];
  const notesTitles = notes.map((note) => note["title"]);

  if (notesTitles.includes(title)) {
    let noteIndex = copyNote.findIndex((note) => note.title === title);
    copyNote[noteIndex] = newNote;
    saveNotes(copyNote);
    console.log(chalk.greenBright("✅ Note is Updated successfully..."));
  } else {
    console.log(chalk.redBright("❌ Note desn't exists!"));
  }
};

// List function
const listNotes = () => {
  const notes = loadNotes();
  const table = new Table();
  let titleWord = chalk.yellowBright("Title");
  let contentWord = chalk.yellowBright("Content");

  table.push(
    [titleWord, contentWord],
    ...notes.map((note) => [note.title, note.content])
  );

  console.log(table.toString());
};

// Clear function
const claerNotes = () => {
  const notes = loadNotes();
  notes.length = 0;
  saveNotes(notes);

  console.log(chalk.greenBright("✅ Notes are Cleared successfully..."));
};

module.exports = {
  addNote,
  removeNote,
  editNote,
  listNotes,
  claerNotes,
  readNote,
};
