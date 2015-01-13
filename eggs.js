var easterEggReporter = function(baseReporterDecorator) {
  baseReporterDecorator(this);

  this.onBrowserComplete = function(browser) {
    var results = browser.lastResult;

    if(results.success) {
      require('child_process').exec("./node_modules/.bin/testRun");
    }
  };
}

easterEggReporter.$inject = ['baseReporterDecorator', 'formatError']

module.exports = {
  'reporter:eggs': ['type', easterEggReporter]
};