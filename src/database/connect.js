
const mongoose = require('mongoose')

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@learningnodejs.ayhk9.mongodb.net/?retryWrites=true&w=majority`, (error) => {
        if (error) {
            console.log('Ocorreu um erro ao se conectar ao banco de dados:', error)
        }
        console.log('Conexão ao banco de dados realizada com sucesso!')
    })
}

module.exports = connectToDatabase;