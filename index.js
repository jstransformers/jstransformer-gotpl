'use strict'

const gotpl = require('gotpl')

exports.name = 'gotpl'
exports.outputFormat = 'html'

exports.render = function (str, options, locals) {
  return gotpl.render(str, locals, options)
}
