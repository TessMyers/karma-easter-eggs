# karma-easter-eggs
## About
This is a skeleton of a karma reporter intended to deliver an easter egg when all tests pass. Currently it's hooked up to a bash file that opens Reddit in a new Chrome tab, but you can put whatever you want in place of that. The structure for this reporter was unashamedly copied from the [karma-unicorn-reporter](https://www.npmjs.com/package/karma-unicorn-reporter).

##Usage

`npm install karma-easter-eggs --save-dev`

##Configuration

```javascript
// karma.conf.js
module.exports = function(config) {
  config.set({
    reporters: ['progress', 'eggs'],
  });
};
```

##DIY

Fork and clone this repo on Github

Edit fileToRun.sh with whatever bash commands you so desire, or just replace the executable file listed on ln 16 of eggs.js with whatever you like.

Happy easter egging!
