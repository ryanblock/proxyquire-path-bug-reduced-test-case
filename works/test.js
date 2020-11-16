var stubs = {
  './baz': {
    method: function(val) {
      console.info('goodbye');
    },
    '@global': true
  }
};

var proxyquire = require('proxyquire');

var foo = proxyquire('./foo', stubs);
foo();  // 'goodbye' is printed to stdout
