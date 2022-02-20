const chalk = require("chalk");
const yargs = require("yargs");
const {
  addNote,
  removeNote,
  readNote,
  editNote,
  listNotes,
  claerNotes,
} = require("./controllers/notes.js");

// Add Option Commmnd
yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Note Title that will be added.",
      demandOption: true,
      type: "string",
    },
    content: {
      describe: "Note Content that will be added.",
      demandOption: true,
      type: "string",
    },
  },

  handler: (argv) => {
    addNote({ title: argv.title, content: argv.content });
  },
});

// Remove Option Commmnd
yargs.command({
  command: "remove",
  describe: "Removing a Note",
  builder: {
    title: {
      describe: "Note title that will be removed.",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    removeNote(argv.title);
  },
});

// Read Option Commmnd
yargs.command({
  command: "read",
  describe: "Read a scpecefic Note.",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },

  handler: (yargs) => {
    readNote(yargs.title);
  },
});

// Edit Option Commmnd
yargs.command({
  command: "edit",
  describe: "Edit a specfic Note.",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    newTitle: {
      describe: "New Note Title",
      demandOption: true,
      type: "string",
    },
    newContent: {
      describe: "New Note Title",
      demandOption: true,
      type: "string",
    },
  },

  handler: (argv) => {
    editNote(argv.title, {
      title: argv.newTitle,
      content: argv.newContent,
    });
  },
});

// List Option Commmnd
yargs.command({
  command: "list",
  descripe: "List all Notes.",

  handler: () => {
    listNotes();
  },
});

// Clear Option Commmnd
yargs.command({
  command: "clear",
  describe: "Clear all Notes.",
  handler: () => {
    claerNotes();
  },
});

yargs.parse();
