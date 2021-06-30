const fs = require("fs");
var reporter = require("cucumber-html-reporter");

var options = {
  theme: "bootstrap",
  jsonDir: "cypress/cucumber-json",
  output: "tmp/report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  brandTitle: "Cypress Cucumber Example",
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    Browser: "Chrome  54.0.2840.98",
    Platform: "Windows 10",
    Parallel: "Scenarios",
    Executed: "Remote",
  },
};

if (!fs.existsSync("./tmp")) {
  fs.mkdirSync("./tmp");
}

reporter.generate(options);

//more info on `metadata` is available in `options` section below.

//to generate consodilated report from multi-cucumber JSON files, please use `jsonDir` option instead of `jsonFile`. More info is available in `options` section below.
