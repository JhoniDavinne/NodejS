const { Person } = require("./person"); //chamada o node js que criamos e o executa.
const dotenv = require('dotenv');
const connectToDatabase = require("./src/database/connect")
dotenv.config();
connectToDatabase();


//const person = new Person('Jhoni');
//console.log(person.sayMyName());

//require("./modules/path")

//require('./modules/fs') //chamada o node js que criamos e o executa.

//require("./modules/http")

require("./modules/express");
