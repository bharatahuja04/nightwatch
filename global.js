var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
    openBrowser: true,
    reportsDirectory: __dirname + '/tests_output',
    // reportFilename: 'generatedReport.html',
    themeName: 'default',

});
module.exports = {
    reporter: reporter.fn
};