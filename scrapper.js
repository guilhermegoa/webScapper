const axios = require('axios')
const cheerio = require('cheerio')
const puppeteer = require('puppeteer');

const { processors, motherboard } = require('./monitoring')

async function getDataWithCheerio(storeData) {
    try {
        const { data } = await axios.get(storeData.url)
        const $ = cheerio.load(data)

        const price = $(storeData.selector).text().replace('R$', '').replace('.', '').trim()
        const text = `${storeData.store} -> 'Produto do modelo *${storeData.product}* está'  *R$${price}* e estava R$${storeData.lowestPrice}. Confira: ${storeData.url}`

        console.log(text)
    }
    catch (error) {
        console.log(`${storeData.store} - error`)
    }
}

async function getDataWithPuppeteer(storeData) {
    try {
        // Inicializar o navegador
        const browser = await puppeteer.launch();

        // Abrir uma nova página
        const page = await browser.newPage();

        // Navegar para uma URL
        await page.goto(storeData.url);

        // Executar ações de scraping aqui
        // Por exemplo, extrair o título da página:
        const pageTitle = await page.title();
        console.log('Título da página:', pageTitle);

        // Fechar o navegador
    } catch (error) {
        // Lidar com erros
        console.error('Ocorreu um erro:', error);
    } finally {
        console.log('Finalizado')
        await browser.close();
    }
}

// let requests = []
// processors.forEach(async p => requests.push(await getDataWithCheerio(p)))
// Promise.all(requests)

getDataWithPuppeteer(motherboard)
