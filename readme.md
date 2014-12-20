Overview [![Build Status](https://travis-ci.org/lydell/line-numbers.svg?branch=master)](https://travis-ci.org/lydell/line-numbers)
========

Add line numbers to a string.

```js
var lineNumbers = require("line-numbers")

var string = [
  "function sum(a, b) {",
  "  return a + b;",
  "}"
].join("\n")

lineNumbers(string)
// 1 | function sum(a, b) {
// 2 |   return a + b;
// 3 | }
```


Installation
============

- `npm install line-numbers`

```js
var lineNumbers = require("line-numbers")
```


Usage
=====

### `lineNumbers(string, [options])` ###

Inserts a line number at the beginning of each line in `string`. All the line
numbers are of the same width; shorter numbers are padded on the left side.

`options`:

- start: `Number`. The number to use for the first line. Defaults to `1`.
- padding: `String`. The character to pad numbers with. Defaults to `" "`.
- before: `String`. String to put before the line number. Defaults to `" "`.
- after: `String`. String to put between the line number and the line itself.
  Defaults to `" | "`.
- transform: `Function`. A function that receives the entire string that will be
  inserted at each line and returns a transformation of it. May be used if
  `before` and `after` aren’t enough, or if you want to colorize the line
  numbers, or whatever.


License
=======

[The X11 (“MIT”) License](LICENSE).
