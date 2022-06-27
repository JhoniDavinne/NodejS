const path = require('path'); //módulo fornece utilitários para trabalhar com caminhos de arquivos e diretórios


// Nome do arquivo atual
console.log(path.basename(__filename));

// Nome do diretório atual
console.log(path.dirname(__filename));

// Extenção do arquivo
console.log(path.extname(__filename));

// Criar objeto Path
console.log(path.parse(__filename));

//Juntar caminhos de arquivos
console.log(path.join(__dirname, 'test'));
