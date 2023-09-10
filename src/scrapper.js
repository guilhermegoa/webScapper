const puppeteer = require('puppeteer')
const { setInterval } = require('timers')

const { sendMessage } = require('./sendMessageWpp')

const obterPreco = async (url, selector, subSelector) => {
    //LOCAL
    // const browser = await puppeteer.launch({ headless: true })

    //DOCKER
    const browser = await puppeteer.launch({
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ],
        executablePath: '/usr/bin/chromium-browser'
    })

    const page = await browser.newPage()
    await page.goto(url)

    try {
        await page.waitForSelector(selector)
        const priceElement = await page.$(`${selector} ${subSelector}`)
        const price = await page.evaluate(element => element.textContent, priceElement)
        await browser.close()
        return price.trim()
    } catch (error) {
        await browser.close()
        return null
    }
}

const monitorarPreco = async (url, selector, subSelector, productName, start) => {
    let ultimoPreco = null

    const delayedExecution = async () => {
        const preco = await obterPreco(url, selector, subSelector)

        if (preco !== null) {
            const me = '5531984733922@c.us'
            const message = `O preço atual do ${productName} é: ${preco} \n\n${url}`

            console.log(message)

            const precoNum = parseFloat(preco.replace("R$", "").replace(".", "").replace(",", "."))

            if (ultimoPreco === null || precoNum < ultimoPreco) {
                if (ultimoPreco !== null) {
                    const messageLowerPrice = `O preço do ${productName} caiu! Agora está custando ${preco} \n\n${url}`
                    console.log(messageLowerPrice)
                    sendMessage(me, messageLowerPrice)

                }

                sendMessage(me, message)
                ultimoPreco = precoNum
            }
        } else {
            const messageError = `Não foi possível obter o preço do ${productName}.`

            console.log(messageError)
            sendMessage(me, messageError)
        }
    }

    setTimeout(delayedExecution, start);

    // Set up an interval for subsequent executions
    setInterval(delayedExecution, 3600000); // 1-hour interval
}

module.exports = monitorarPreco