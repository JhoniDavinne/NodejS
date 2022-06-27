const fs = require('fs'); //módulo do sistema de arquivos Node.js permite trabalhar com o sistema de arquivos em seu computador.
const path = require('path'); //módulo fornece utilitários para trabalhar com caminhos de arquivos e diretórios

// Criar uma pasta

// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//     if (error) {
//         return console.log('Erro; ', error);
//     }
//     console.log('pasta criada com sucesso');
// });

// Criar um arquivo

fs.writeFile(path.join(__dirname, '/test', 'test.txt'),
    'hello node!',
    (error) => {
        if (error) {
            return console.log(error);
        }
        console.log('Arquivo criado com sucesso');

        //Obs: os métodos asseguir estão dentro deste metodo e não fora, pois fs.writeFile é asyncrono, logo poderia ocorrer a situação do fs.readFile retornar 'hello node! caso os metodos fossem separados'

        // Adicionar a um arquivo um alteração 
        fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'hello world!',
            (error) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Arquivo modificado com sucesso');
            }
        );

        // Ler arquivos 
        fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8',
            (error, data) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Conteúdo do arquivo: ', data)
            }
        );
    }
);

