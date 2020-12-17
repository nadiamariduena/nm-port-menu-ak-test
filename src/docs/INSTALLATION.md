## INSTALL REACT dependencies

```javascript

npm i react

npm i react-dom

npm i react-scripts

// or type  -----------

npm i react react-dom react-scripts

//   -----------

npm i node-sass --save // if sass shows some error, read the comment below

npm i autoprefixer@9.8.0

npm i gh-pages --save-dev

npm i react-router-dom

npm i aos --save //animation dependency
```

### OR COPY AND PASTE this and type:

> npm i

```javascript
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "killnode": "lsof -ti :8000 | xargs kill"
  },
  "keywords": [
    "training",
    "personal",
    "react"
  ],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "autoprefixer": "^9.8.0",
    "node-sass": "^4.14.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "^4.0.1"
  }
```

<br>

#### SASS related issues

```javascript
// 1 if you already installed it and it caused issues
npm uninstall node-sass
// 2
npm install node-sass@4.14.1
//  https://stackoverflow.com/questions/64625050/error-node-sass-version-5-0-0-is-incompatible-with-4-0-0
```

<br>
<br>
<hr>
<br>
<br>