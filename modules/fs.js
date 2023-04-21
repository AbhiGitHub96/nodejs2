const res = require('express/lib/response')
const fs = require('fs')
const first = fs.readFileSync('../content/first.txt', 'utf8')
const second = fs.readFileSync('../content/second.txt', 'utf8')
console.log(first, second)

fs.writeFileSync('../content/write-result.txt', `here is the result: ${first} , ${second}`)

// Async

// fs.readFile('../content/first.txt', 'utf8' , (err, result) => {
//     if(err){
//         console.log('error')
        
//     }
//     const first = result


//     fs.readFile('../content/second.txt', 'utf8', (err, result) => {
//         if(err){
//             console.log('error')
       
//         }
//         const second = result
//         fs.writeFile('../content/write-sync.txt', `here is result of file: ${first},${second}`, (err, result) => {
//             if(err){
//                 console.log(err)
              
//             }
//             console.log(result)
//         })
//     })

// })