

# Setup Mac OS Env

### Install Homebrew

```/bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh]```

### Install Git
``` brew install git ```


### Install Zsh

``` brew install zsh```

Follow these steps for zsh installation

https://sourabhbajaj.com/mac-setup/iTerm/zsh.html

# Commands

### Git

``` 

git clone <repo>   # Initially used to clone a repo located at onto local machine. 
git pull # pulls down updates

git add <filename> # adds a file and stages changes in current repo, usually follow up with a git commit 
git commit -m <message> # commit staged files
git push <remote> <branch> # pushes your commited staged changes to remote branch. 

```

Git cheatsheet: https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet

### NPM

```

npm i // installs all packages the current project 
npm uninstall <package_name> // uninstall a specific package name 
npm install <package> // install a specific package to the current project 
npm start // a start script that executes node server.js 

```

NPM cheatsheet: https://lefrenk.gitbooks.io/cli-git-cheatsheet/content/npm-cheat-sheet.html

### package.json

```
// scripts are shortcuts for running commmands from the terminal with npm, example:  npm start or npm dev will run `node server.js` or `nodemon server.js`

"scripts": {  
  "postinstall": "npm i procore-sdk-client-1.0.1.tgz",  
  "start": "node server.js",  
  "dev": "nodemon server.js",  
  "test": "tap --no-coverage  --no-esm"  
},

// package.json maintains a list of your dependencies in the package.json file. NPM edits the file when a package is added or removed. 

"dependencies": {  
  "dotenv": "^8.2.0",  
  "fastify": "3.0.0-rc.3",  
  "fastify-blipp": "2.3.1",  
  "fastify-loader": "2.3.7",
}

```




### Node

```

node <filename> // node executes the file 
node server.js // executes the server.js file which typically starts the web server for the project 
node // if start node at the command line, you can use the REPL which lets you code 

```

### 
