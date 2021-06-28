const fs = require('fs');
const utilModule = require('./util')

const params = process.argv.slice(2)
const reqPrice = params[params.length-1]
const itemUrl = utilModule.urlBuilder([process.argv.slice(2)])
var writeData = itemUrl + "$" +reqPrice


fs.writeFile('items.txt',writeData+"\r\n",{flag : 'a'},(err)=>{

    if(err)
        console.log(err)
})



