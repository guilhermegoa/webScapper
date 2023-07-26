const axios = require('axios')
const cheerio = require('cheerio')

const URLS = {
    Kabum: {
        url: 'https://www.kabum.com.br/produto/165191/monitor-samsung-26-9-2560x1440-led-uhd-odyssey-g7-240hz-1ms-4k-curvo-2x-hdmi-usb-display-port-lc27g75tq',
        selector: '.finalPrice',
        lowestPrice: ''
    },
    Magalu: {
        url: 'https://www.magazineluiza.com.br/monitor-samsung-27-led-va-gamer-curvo-odyssey-g7-qhd-240hz-1ms-2xusb-2xhdmi-g-sync-altura-e-rotacao/p/chkj6dc126/in/mnpc/?&seller_id=mercadodaimpressora&utm_campaign=&partner_id=67172',
        selector: '[data-testid="price-value"]',
        lowestPrice: ''
    },
    MercadoLivre: {

        url: 'https://www.mercadolivre.com.br/monitor-gamer-curvo-samsung-odyssey-g7-c27g75tqs-qled-27-preto-100v240v/p/MLB18135979?from=gshop&matt_tool=39437454&matt_word=&matt_source=google&matt_campaign_id=14303413652&matt_ad_group_id=125984292877&matt_match_type=&matt_network=g&matt_device=c&matt_creative=539354956548&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB18135979-product&matt_product_partition_id=1816373777646&matt_target_id=pla-1816373777646',
        selector: '.andes-money-amount__fraction',
        lowestPrice: ''
    }
}

async function getData(storeData, store) {
    try {
        const { data } = await axios.get(storeData.url)

        const $ = cheerio.load(data)

        const price = $(storeData.selector).text()

        return `${store} - ${price}`
    } catch (error) {
        throw error
    }
}

const requests = []

Object.entries(URLS).forEach(([key, value]) => {
    requests.push(getData(value, key))
})

Promise.all(requests).then((data) => { console.log(data) })