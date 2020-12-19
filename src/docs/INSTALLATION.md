# TO CREATE A BASIC APP 🌵

#### TYPE THE FOLLOWING IN THE UBUNTU CONSOLE

```javascript
cd // to go to the root
ls // to see all the folders
// once you choose a folder , type this:
cd Desktop
ls // to see more folders inside of the Desktop
// since i want to create a folder inside the Documents , i can type the command or simply i just create a folder there, like MYPERSO-MEYOKO , after i created the folder i do this:
cd MYPERSO-MEYOKO
//
```

#### You will have something like this

```javascript
// Desktop/MYPERSO-MEYOKO2020$ 
```

#### Once you got that, type this:

```javascript
//Example
/Desktop/MYPERSO-MEYOKO2020$ npm install -g create-react-app
// ETC ETC
```

- READ THE COMMENTS

```javascript
// 1
npm install -g create-react-app
// 2
create-react-app projectname // meyoko-portfolio , meyoko2020 etc DONT USE UPPERCASE!!
//
cd projectname // meyoko-portfolio , meyoko2020 etc
// you can type : code . and open vs code from the ubuntu terminal and then type: npm start from there
npm run start
//
```

#### RESULT

- AFTER THE INSTALLATON YOU HAVE TO HAVE SOMETHING LIKE THIS, but if there s something you dont see it you will have to install it manually.

- GSAP, SCSS AND OTHER DEPENDENCIES MUST BE INSTALLED SEPARATELY

```javascript
{
  "name": "nm-port-menu-akram-test",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.6",
    "@testing-library/react": "^11.2.2",
    "@testing-library/user-event": "^12.5.0",
    "gsap": "^3.5.1",
    "node-sass": "^4.14.1",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-router": "^5.2.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.1",
    "web-vitals": "^0.2.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```

<br>
<br>
<br>

# 🌵

## INSTALL REACT dependencies Manually

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
