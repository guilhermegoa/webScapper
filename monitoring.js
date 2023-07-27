const processors = [
    {
        store: 'KaBuM!',
        product: 'Ryzen 7 7700X',
        url: 'https://www.kabum.com.br/produto/378413/processador-amd-ryzen-7-7700x-5-4ghz-max-turbo-cache-40mb-am5-8-nucleos-video-integrado-100-100000591wof',
        selector: '.finalPrice',
        lowestPrice: '2199,99'
    },
    {
        store: 'KaBuM!',
        product: 'Ryzen 7 7800X3D',
        url: 'https://www.kabum.com.br/produto/426262/processador-amd-ryzen-7-7800x3d-5-0ghz-max-turbo-cache-104mb-am5-8-nucleos-video-integrado-100-100000910wof',
        selector: '.finalPrice',
        lowestPrice: '2899,99'
    },
]

const motherboard = {
    store: 'KaBuM!',
    product: 'Placa-Mãe',
    url: 'https://www.kabum.com.br/hardware/placas-mae/placa-mae-amd?page_number=1&page_size=100&facet_filters=eyJTb2NrZXQiOlsiQU01Il0sIkZvcm0gRmFjdG9yIjpbIk1pY3JvIEFUWCIsIkFUWCJdfQ==&sort=most_searched',
    productSelector: 'main .productCard',
    imgSelector: '.imageCard',
    priceSelector: '.priceCard',
}

const coller = []
const memory = []
const graphicsCard = []

module.exports = {
    processors,
    motherboard,
    coller,
    memory,
    graphicsCard
}