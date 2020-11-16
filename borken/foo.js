// This won't work
var bar = require('./bar');

// Specifying the full relative path doesn't work, either
// var bar = require('./bar/index.js');

// Even specifying the full absolute file path doesn't work
// var bar = require(process.cwd() + '/bar/index.js');

module.exports = function() {
  bar();
}
