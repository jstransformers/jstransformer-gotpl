# jstransformer-gotpl

[GoTpl](https://github.com/Lanfei/GoTpl) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-gotpl/master.svg)](https://travis-ci.org/jstransformers/jstransformer-gotpl)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-gotpl/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-gotpl)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-gotpl/master.svg)](http://david-dm.org/jstransformers/jstransformer-gotpl)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-gotpl.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-gotpl.svg)](https://www.npmjs.org/package/jstransformer-gotpl)

## Installation

    npm install jstransformer-gotpl

## API

```js
var gotpl = require('jstransformer')(require('jstransformer-gotpl'))

gotpl.render('Hello, <%= item.name %>!', {name: "World"}).body
//=> 'Hello, World!'
```

## License

MIT
