# bootstrap-practice
Familiarizing with Bootstrap 4 components, and trying out the Javascript Cypress test framework

<b>GitHub Pages link</b>

https://vokenny.github.io/bootstrap-practice/index.html

<b>To open Cypress</b>

As defined in `package.json`:

`npm run cypress`

## TODO
- Add tablet view tests
- Add mobile view tests
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