# shellsquid-ui
Angular client application for [shellsquid](https://github.com/tomsteele/shellsquid).

## Install
Download the latest release [here](https://github.com/tomsteele/shellsquid-ui/releases/latest) and extract to your shellsquid static directory.

## Build
Install dependencies and run the npm build script:

`$ npm i`

`$ npm run-script build`

All required files are output to `./dist`.

## Development
Install dependencies:

`$ npm i`

Start webpack-dev-server and open browser to `http://localhost:8080/`. API is conifigured to talk to the default shellsquid port on localhost:1337:

`$ npm start`

