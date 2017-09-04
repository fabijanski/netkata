# js-dev-env-light
JavaScript Development Environment for basic, static apps. 

## Setup:
**1)** Configured editor with EditorConfig Plugin (to be installed by the editor)

**2)** Continuous Security monitoring with Node Security Platform

**3)** Browsersync server for development stage and Express server for production

**4)** Work-in-progress via localtunnel

**5)** Webpack bundler

**6)** ESLint with configured eslint-watch

**7)** Production to /dist folder handling dynamic HTML, bundle splitting, cache busting and *.html, *.js, *.scss (pre setup with normalize-scss) -> *.css minification.

**8)** Automation with npm scripts, e.g.:

Start dev-server in parallel with nsp-check and eslint-watch
```bash
$ npm start
```
Clean existing and produce new /dist folder, start prod-server
```bash
$ npm run build
```




