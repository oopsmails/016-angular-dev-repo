# AngularSimple

## Testing TranslateService


npm install @ngx-translate/core --save

https://github.com/ngx-translate/core/issues/636

`npm run test -- --include src/app/translation-test`

ng g c translation-test

- totally unit test
https://stackoverflow.com/questions/49172531/ngx-translate-translate-string-in-unit-testing


- unit test tricks
http://yuezhizizhang.github.io/angular6/unit-testing/2019/03/27/angular-unit-tests-tricks.html


- from real en.json
https://github.com/ngx-translate/example/blob/master/src/app/app.component.spec.ts



const TRANSLATIONS_EN = require('../assets/i18n/en.json');
const TRANSLATIONS_FR = require('../assets/i18n/fr.json');

npm install @ngx-translate/http-loader --save

"@ngx-translate/http-loader": "^6.0.0",

npm i @types/node --save

"@types/node": "^12.19.16",

- error TS2591: Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i @types/node` and then add `node` to the types field in your tsconfig.

Solution:

There are 3 ts config files,

tsconfig.json, main
tsconfig.app.json, for application, e.g, if using require in app.component.ts
tsconfig.spec.json, for unit test, e.g, if using require in translation-test2.component.spec.ts

1. put in tsconfig.json

```
  "compilerOptions": {
..........,
    "resolveJsonModule": true,
    "esModuleInterop": true,

```

2. put in tsconfig.app.json AND tsconfig.spec.json

```


"compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": ["node"] <--------------------------- for tsconfig.app.json
  },


  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "node", <--------------------------- for tsconfig.spec.json
      "jasmine"
    ]

```

## Debugging tests
If your tests aren't working as you expect them to, you can inspect and debug them in the browser.

For the sample app that the testing guides describe, see the sample app.

For the tests features in the testing guides, see tests.

Debug specs in the browser in the same way that you debug an application.

- Reveal the Karma browser window. See Set up testing if you need help with this step.
- Click the DEBUG button; it opens a new browser tab and re-runs the tests.
- Open the browser's “Developer Tools” (Ctrl-Shift-I on Windows; Command-Option-I in macOS).
- Pick the "sources" section.
- Open the 1st.spec.ts test file (Control/Command-P, then start typing the name of the file).
- Set a breakpoint in the test.
- Refresh the browser, and it stops at the breakpoint.


## No2. How to test a single spec file?
You are adding new test cases to your user.component.spec.ts file. You want to run them to see if they are working. Damn it. You already have hundreds of testing cases ahead. Hence, you are sitting down and counting your fingers, hoping your newly added cases could be hitted sooner. How to run a single spec file, namely, user.component.spec.ts? Go to **test.ts** file, commenting the following line:

// Then we find all the tests.
const context = require.context('./', true, /\/app\/.*\.ts$/);
Instead, specify your spec file in the context:

const context = require.context('./', true, /\/app\/user\/user\.component\.spec\.ts$/);



