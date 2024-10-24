# Cypress Automation Test

## Execution
- Tested with npm 6.14.4 (require npm installed)
- Update account credentials in src/utility/logIn.js before running the test 
- Run "npm install" to install modules
- Launch the Cypress Test Runner to run the test suite: "npm run test"
- Headless execution: "./node_modules/cypress/bin/cypress run"

## File structure
- Use page object model. Each web page has all selectors in its dedicated file
- Common methods for test scripts are in the utility file folder
- [Test results - video](./cypress/videos)

