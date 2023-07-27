const cheerio = require('cheerio');

// Exemplo de HTML (simulando uma página web)
const html = `
  <main>
    <div class="container">
      <a href="#" title="Link 1">Item 1</a>
      <a href="#" title="Link 2">Item 2</a>
    </div>
    <div class="container">
      <a href="#" title="Link 3">Item 3</a>
      <a href="#" title="Link 4">Item 4</a>
    </div>
  </main>
`;

// Carregue o HTML com o cheerio
const $ = cheerio.load(html);

// Selecione as <div> dentro da tag <main>
const divs = $('main .container');

// Array para armazenar os dados
const dataList = [];

// Iterar sobre cada <div>
divs.each((index, element) => {
    // Selecione os elementos <a> dentro de cada <div>
    const links = $(element).find('a');

    // Array para armazenar os dados dos links dentro desta <div>
    const divData = [];

    // Iterar sobre cada link (<a>)
    links.each((linkIndex, linkElement) => {
        const title = $(linkElement).attr('title');
        const href = $(linkElement).attr('href');
        divData.push({ title, href });
    });

    // Adicionar os dados desta <div> ao array principal
    dataList.push(divData);
});

console.log(dataList);