const fs = require('fs');
const fetchModule = require('./fetcht')
const mailModule = require('./mail')

fs.readFile('items.txt','utf8',(err,data)=>{
    if(err)
        console.log("Error reading file...")
    else{
        const splitData = data.split(/\r?\n/)
        splitData.pop()
        splitData.forEach((line)=>{

            const lineSplit = line.split("$")
            const skinUrl = lineSplit[0]
            const reqPrice = lineSplit[1]

            fetchModule.priceFetch(skinUrl).then((res)=>{
                if(res.floatPrice<=reqPrice && !isNaN(res.floatPrice) && res.itemName!=undefined)
                {
                    console.log("Email block")
                    mailModule.sendEmail(res.itemName,res.floatPrice,res.buyUrl)
                }
            })
        })
    }
})   

