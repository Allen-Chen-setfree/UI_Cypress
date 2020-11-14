# Stan Automation Test

## Execution
- Tested with npm 6.14.4 (require npm installed)
- Update account credential in src/utility/logIn.js before run the test 
- Run "npm install" to install modules
- Launch the Cypress Test Runner to run the test suite: npm run test
- Headless execution: ./node_modules/cypress/bin/cypress run

## File structure
- Use page object model. Each web page has all selectors in its dedicated file
- Common methods for test scripts are in utility file folder

## Improvements
- Cypress doesn't support hover. Need a workaround
- Parameterised tests. The test data is hard coded so far. Need to seperate test data from test cases. So the test data can be passed in. 

## Next step
- Reduce the execution time. Add support to parallel excecution.
- Add CI tool and report. The execution can be triggered by code commit or scheduled and the test report can be sent out to stakeholders.