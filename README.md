# bootstrap-practice
Familiarizing with Bootstrap 4 components, and trying out the Javascript Cypress test framework

<b>GitHub Pages link</b>

https://vokenny.github.io/bootstrap-practice/

## Dependencies
### Node.js and Node Package Manager (`npm`)
You need Node.js and `npm` to install & use Browsersync and Cypress. More specifically, you need Node.js 10, or 12 and above for Cypress.

`npm` is bundled with Node.js installation.

https://nodejs.org/en/

### Browsersync
Browsersync is for running the project on a mini server for rapid browser testing.

https://www.browsersync.io/#install

#### Starting the server
To watch all the files in the project, and start a server:

`browser-sync start --server --files "**/*"`

Browsersync will provide a URL to view the site

### Cypress
Install Cypress via `npm`

https://docs.cypress.io/guides/getting-started/installing-cypress.html#Installing

#### Cypress Test Runner
1. You need to start the site running on default port 3000 provided by Browsersync. If the site is running on a different port, change the `baseUrl` config value in `cypress.json`.
2. As defined in `package.json`, enter the following command in the project directory:
`npm run cypress`
3. The Cypress test runner UI should open, select your browser then click 'Run X integration tests'

## TODO
- Add screenshot upon test failure

## Accessibility
<b>21/12/20</b>

[WAVE](https://wave.webaim.org/): 1 error for poor contrast

[Axe](https://www.deque.com/axe/): 7 errors for poor contrast

[HTML Validator](https://addons.mozilla.org/en-US/firefox/addon/html-validator/): No errors

## Known bugs
1. 'Next' and 'Back' links on Homepage carousel expand outside of carousel borders in the corners
2. Viewport in Tablet mode isn't completely filled due to lack of content - need to expand page to fill viewport
3. Only collapses hamburger menu on blur if it is visible (e.g. in tablet/mobile view). If it is expanded and viewport is increased so the hamburger menu disappears, when you lose focus and reduce viewport so it reappears, the menu is still expanded