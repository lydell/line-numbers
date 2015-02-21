// Copyright 2014 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)

var leftPad = require("left-pad")

function identity(arg) { return arg }

function get(options, key, defaultValue) {
  return (key in options ? options[key] : defaultValue)
}

function lineNumbers(code, options) {
  var getOption = get.bind(null, options || {})
  var transform = getOption("transform", identity)
  var padding   = getOption("padding", " ")
  var before    = getOption("before", " ")
  var after     = getOption("after", " | ")
  var start     = getOption("start", 1)
  var isArray   = Array.isArray(code)
  var lines     = (isArray ? code : code.split("\n"))
  var end       = start + lines.length - 1
  var width     = String(end).length
  var numbered  = lines.map(function(line, index) {
    var number  = start + index
    return transform(before + leftPad(number, width, padding) + after) + line
  })
  return (isArray ? numbered : numbered.join("\n"))
}

module.exports = lineNumbers
