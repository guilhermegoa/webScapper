const { client } = require('./sendMessageWpp')
const monitorarPreco = require('./scrapper')

const main = async () => {
    await client.initialize()

    const product1 = 'Cooler para Processador Noctua Preto - NH-D15'
    const product2 = 'Cooler para Processador Noctua Preto - NH-U12A'
    const product3 = 'Gabinete NZXT H7 Preto'

    const selectorKabum = '.sc-be35ab0-1'
    const subSelectorKabum = 'h4'

    const selectorWaz = '.valor-boleto'
    const subSelectorWaz = 'strong'

    const url1 = 'https://www.kabum.com.br/produto/135806/cooler-para-processador-noctua-para-amd-intel-preto-nh-d15-ch-bk'
    const url2 = 'https://www.waz.com.br/cooler-p-processador-cpu-noctua-nh-d15-chromax-black-119135-html/p'

    const url3 = 'https://www.kabum.com.br/produto/391198/cooler-para-processador-noctua-amd-intel-120mm-preto-cromado-nh-u12a-ch-bk'
    const url4 = 'https://www.waz.com.br/cooler-p-processador-cpu-noctua-nh-u12a-chromax-black-nh-u12a-ch-bk-123412-html/p'

    monitorarPreco(url1, selectorKabum, subSelectorKabum, product1, 0)
    monitorarPreco(url3, selectorKabum, subSelectorKabum, product2, 20000)
    monitorarPreco(url2, selectorWaz, subSelectorWaz, product1, 40000)
    monitorarPreco(url4, selectorWaz, subSelectorWaz, product2, 60000)


    const urlGabinete1 = 'https://www.kabum.com.br/produto/415512/gabinete-nzxt-h7-flow-preto-mid-tower-lateral-em-vidro'
    const urlGabinete2 = 'https://www.kabum.com.br/produto/352708/gabinete-nzxt-h7-mid-tower-atx-lateral-em-vidro-temperado-2x-fans-preto-cm-h71bb-01'
    const urlGabinete3 = 'https://www.kabum.com.br/produto/364998/gabinete-gamer-nzxt-h7-preto-mid-tower-lateral-de-vidro-temperado-atx-sem-fonte-2-coolers-cm-h71bb-01'
    const urlGabinete4 = 'https://www.kabum.com.br/produto/415513/gabinete-nzxt-h7-elite-rgb-mid-tower-vidro-lateral-preto'

    // monitorarPreco(urlGabinete1, selectorKabum, subSelectorKabum, product3)
    // monitorarPreco(urlGabinete2, selectorKabum, subSelectorKabum, product3)
    // monitorarPreco(urlGabinete3, selectorKabum, subSelectorKabum, product3)
    // monitorarPreco(urlGabinete4, selectorKabum, subSelectorKabum, product3)


}

main()