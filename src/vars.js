require('dotenv').config()

const puppeteerConfig = {
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox'
    ],
    executablePath: process.env.ENVIROMENT === 'production' ? '/usr/bin/chromium-browser' : ''
}

const to = process.env.MESSAGE_TO

module.exports = {
    puppeteerConfig,
    to
}