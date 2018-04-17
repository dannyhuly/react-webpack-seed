# React - Seed Project 

React seed project with JSX support.

## Prerequisites

In order to run/devolop the project the following is requerd:
* NodeJS(V8) + NPM(V5) (see [here](https://nodejs.org/en/))
* Chrome browser (optinal)

## Commands

### Build

Build app to `dist` directory (production mode).

```bash
$ npm run build         # build for prod (default)
$ npm run build:dev     # build for dev (with map files)
```

### Serve (DEV)

Serve the webapp via local webserver (Watch mode is enabled)

```bash
$ npm run serve
```

### Run Unit Tests

```bash
$ npm run unit          # singele run (ChromeHeadless)
$ npm run unit:debug    # load chrome browser agent mode (for remove attach)
```


## IDEs Support

>Note: IDE support is optional. All project commands are generic and should be integratable with all modern IDEs.

### VS Code

#### Setup
* Install [VS Code](https://code.visualstudio.com/)
* Install extention [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
* Install extention [Quokka](https://quokkajs.com/docs/index.html) (optinal)

#### Debugging IDE integration

* Debuggung App
    1. Run `$ npm run serve` in terminal.
    2. start `Dev (Debug Chrome)` task.

* Debugging Unit test
    1. Run `$ npm run unit:debug` in terminal.
    2. start `Unit (Attach Karma Chrome)` task.