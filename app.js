// console.log(__dirname)

// // setInterval(() => {
// //     console.log('hello world')
// // },1000)
// // console.log(__dirname)
// const names = require('./1-name')
// const sayHii = require('./1-function')


// sayHii(names.jhon)
// sayHii(names.peter)

const lodash = require('lodash')

const item = [11,[1,[1]]]
console.log(lodash.flattenDeep(item))