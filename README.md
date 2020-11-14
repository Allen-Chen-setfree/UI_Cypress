# Stan Automation Test

## file structure
- Use page object model. Each web page has all selectors in its dedicated file
- Common methods for test scripts are in utility file folder

## improvements
- Cypress doesn't support hover. Need a workaround
- Parameterised tests. The test data is hard coded so far. Need to seperate test data from test cases

## next step
- Reduce the execution time. Add support to parallel excecution.
- Add CI tool and report. The execution can be triggered by code commit or scheduled and the test report can be sent out to stakeholders.