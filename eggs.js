var easterEggReporter = function(baseReporterDecorator) {
  baseReporterDecorator(this);

  var results;

  // this is deeply flawed at the moment, won't actually tally total for multiple browsers. Works great for one though!

  this.onBrowserComplete = function(browser) {
    results = browser.lastResult;
    console.log(results);
  };

  this.onExit = function(done) {

    if(results.success === results.total) {
      require('child_process').exec("./node_modules/.bin/runFile", function(err, stdout){
        if (err) {
          console.log('Error!', err);
        } else {
          console.log(stdout);
        }
      });
    }
    done();
  }
}

easterEggReporter.$inject = ['baseReporterDecorator', 'formatError']

module.exports = {
  'reporter:eggs': ['type', easterEggReporter]
};
