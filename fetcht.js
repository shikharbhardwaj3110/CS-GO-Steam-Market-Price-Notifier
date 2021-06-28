const cheerio = require('cheerio')
const axios = require('axios')
const utilModule = require('./util')

fetchUrl = async(url) => {
    var response = await axios.get(url)
    return response
}

getPrice = async (url) => {
    var response = await fetchUrl(url)
    const $ = cheerio.load(response.data)
    return [($("span[class='normal_price']").text()),$('#resultlink_0').attr('href'),$('#result_0').attr('data-hash-name')]
}

priceFetch = async (mainUrl) => {
    console.log("URL recevied : ",mainUrl)
    const res = await getPrice(mainUrl)
    let strPrice = res[0]
    let buyUrl = res[1]
    let itemName = res[2]
    const floatPrice = utilModule.cleanPrice(strPrice)
    return {floatPrice,itemName,buyUrl}
}

module.exports = {priceFetch}