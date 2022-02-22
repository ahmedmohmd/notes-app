## **Notes App**

### Description
Note app is a Program that you can use it by terminal, It is made by Note JS and other Libs & NPM Packages.

### Technologies
<div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
  <a href="https://nodejs.org/en/"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="drawing" width="48" height="48"/></a>
  <a href="https://www.npmjs.com/package/yargs"><img src="https://raw.githubusercontent.com/yargs/yargs/main/yargs-logo.png" alt="drawing" width="48" height="48"/></a>
  <a href="https://www.npmjs.com/package/chalk"><img src="https://raw.githubusercontent.com/chalk/chalk/HEAD/media/logo.svg" alt="drawing" width="48" height="48"/></a>
</div>

## Other Libs & Packages:
- [_cli-table_](https://www.npmjs.com/package/cli-table) Package


### How to Use this App
1. Install Node Js in your Machine from the Following URL:
   **[Node JS](https://nodejs.org/en/download/)**

2. Clone this Repo in your Machine by following command:

```
https://github.com/ahmedmohmd/notes-app.git
```

3. Open Your Terminal in This Repo Directory.

4. Type The Following Command in your Terminal.
 ```
 npm install
 ```

5. Finally You can type your commands to use this App.

6. Now you can use this app by open terminal in repo folder and just type app commands.


### Commands
- **Add Note**

```javascript
node app.js add --title="your note title" --content="your note body"
```

- **Delete Note**

```javascript
node app.js remove --title="note title"
```

- **Read Note**

```javascript
node app.js read --title="note title"
```

- **Edit Note**

```javascript
node app.js edit --title="old note title" --newTitle="new note title" --newContent="new note content"
```

- **List Notes**

```javascript
node app.js list
```

- **Clear Notes**

```javascript
node app.js clear
```

### App Screenshot
![App Image](/carbon.png)
