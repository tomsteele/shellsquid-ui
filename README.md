# shellsquid-ui
Angular client application for [shellsquid](https://github.com/tomsteele/shellsquid).

## Install
Download the latest release [here](https://github.com/tomsteele/shellsquid-ui/releases/latest), extract, and move the content of dist to your shellsquid static directory:

`$ tar -zxvf shellsquid-ui*.tar.gz`

`$ mv dist/* path/to/shellsquid/static/`


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

