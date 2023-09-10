const qrcode = require('qrcode-terminal')
const { Client, LocalAuth } = require('whatsapp-web.js')

const { puppeteerConfig, to } = require('./vars')

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: puppeteerConfig
})

function consoleLog(message) {
    console.log(message)
    console.log('----------------------------------------')
}

async function sendMessage(to, message) {
    new Promise((resolve, reject) => {
        try {
            consoleLog('Sending message')
            client.sendMessage(to, message)
            resolve()
        } catch (err) {
            consoleLog('Deu ruim')
            reject()
        }
    })
}

client.on('qr', qr => {
    qrcode.generate(qr, { small: true })
    consoleLog(`to: ${to}\npuppeteerConfig: ${puppeteerConfig}`)
})

client.on('ready', () => {
    consoleLog('Client is ready!')
    sendMessage(to, 'Client is ready!')
})

client.on('message_create', message => {
    if (message.body == 'status') {
        const response = 'Funcionando'
        consoleLog(response)
        sendMessage(to, response)
        return
    }

    if (message.body == 'me') {
        const response = `My contact: ${message.from}`
        consoleLog(response)
        sendMessage(to, response)
        return
    }
})

module.exports = { client, sendMessage }