# The Metadictionary

Given a length and zero or more characters, this app returns a list of English words that match those criteria.

## Setup

To set up a local instance of this app, you'll need [Node.js](https://nodejs.org/en/) version 10.16 or higher, and npm version 5.6 or higher. npm comes bundled with Node.js.
  The Metadictionary was created in [create-react-app](https://create-react-app.dev/), so the following instructions will work for it or any other app made in create-react-app.
  <br/>
  First, clone this repository and cd into it:
  
  ```
  > git clone https://github.com/hutch888/metadictionary.git
  > cd metadictionary
  ```
  <br/>
  Next, find the file called `package.json` and open it in a text editor. It should contain the following lines:
  
  ```
    "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  } 
  ```
  The `package.json` in this repository has these lines, but generally when you clone react-apps check to make sure.
  
  <br/>
  Back at the command prompt, type
  
  ```
  > npm install
  ```

  When that finishes, type
  
  ```
  > npm start
  ```
  This should start up an instance of the app on your device. To use it, open a browser and type `localhost:3000` in the address bar.
    <br/>
  If you want to build the app for deployment (perhaps after modifying it in some interesting way!) type
  
  ```
  > npm run build
  ```
  at the command prompt.

  ## Technologies

  This project was built with Node.js version 14.15.0 and create-react-app version 4.0.3. It uses the list of English words from [dwyl/english-words](https://github.com/dwyl/english-words). I'd like to extend my heartfelt thanks to anyone who worked on that project, and to the brilliant coders behind Node and React.
  
  ## License and Contact information
  
  This project is shared under the MIT license. See LICENSE.txt for more information.
  You can contact me at warpfield45@gmail.com.
  
  
