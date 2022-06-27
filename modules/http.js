const http = require('http'); //O Node.js tem um módulo integrado chamado HTTP, que permite que o Node.js transfira dados pelo Hyper Text Transfer Protocol (HTTP)

const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url == "/home") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end("<h1> HOME PAGE </h1>");
    }
    if (req.url == "/users") {
        const users = [
            {
                name: "Jhoni",
                email: "jhoni@email"
            }, {
                name: "Davinne",
                email: "davinne@email"
            }
        ]

        res.writeHead(200, { "Content-Type": "application/json" })
        res.json(users)
    }
})

server.listen(port, () => console.log(`Rodando na porta ${port}!`))