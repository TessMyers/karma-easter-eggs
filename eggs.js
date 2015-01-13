var easterEggReporter = function(baseReporterDecorator) {
  baseReporterDecorator(this);

  this.onBrowserComplete = function(browser) {
    var results = browser.lastResult;

    if(results.success) {
      require('child_process').exec("./node_modules/.bin/runFile", function(err, stdout){
          if (err) {
            console.log('Error!', err);
          } else {
            console.log(stdout);
          }
      });
    }
  };
}

easterEggReporter.$inject = ['baseReporterDecorator', 'formatError']

module.exports = {
  'reporter:eggs': ['type', easterEggReporter]
};
