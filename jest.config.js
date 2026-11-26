module.exports = {
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        pageTitle: "Jest Test Report",
        outputPath: "./test-report.html",
        includeFailureMsg: true,
        includeSuiteFailure: true,
      },
    ],
  ],
};
