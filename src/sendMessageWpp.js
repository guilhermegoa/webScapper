const qrcode = require('qrcode-terminal')
const { Client, LocalAuth } = require('whatsapp-web.js')


//LOCAL
// const client = new Client({
//     puppeteerOptions,
//     authStrategy: new LocalAuth()
// })


//DOCKER
const client = new Client({
    puppeteer: {
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ],
        executablePath: '/usr/bin/chromium-browser'
    },
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
})

client.on('ready', () => {
    console.log('Client is ready!')
    sendMessage('5531984733922@c.us', 'Client is ready!')
})

client.on('message_create', message => {
    const me = '5531984733922@c.us'

    if (message.body == 'status') {
        const response = 'Funcionando'
        consoleLog(response)
        sendMessage(me, response)
        return
    }
})

module.exports = { client, sendMessage }