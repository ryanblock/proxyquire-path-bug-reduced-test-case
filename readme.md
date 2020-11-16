### To test

- Working (per [example](https://github.com/thlorenz/proxyquire#globally-override-require-during-module-initialization)): `cd works && node test.js`
- Not working (per [example](https://github.com/thlorenz/proxyquire#globally-override-require-during-module-initialization)) with subfolder: `cd borken && node test.js`
  - See L1-8 in [`borken/foo.js`](borken/foo.js)
