const _ = require('lodash')

function hello(name: string) {
  return 'Hello, ' + _.capitalize(name) + '!'
}

hello('rollup');
