const express = require('express');
const send = require('send');
const app = express();
require('dotenv').config();
const port =  3000;

//conexcion a la base de datos 

const mongoose = require('mongoose');
//llevadoa al archivo env


//const uri = `mongodb+srv://${usuario}:${password}@mydbtest.efhng.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=mydbtest`;
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@mydbtest.efhng.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority&appName=mydbtest`

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('conectado a mongodb')) 
  .catch(e => console.log('error de conexión', e))

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"))

app.use('/', require ('./router/rutasWeb.js'));
app.use('/mascotas', require('./router/mascotas.js'));

app.use((req, res , next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "este es mi sitio web"
    })
})


app.get("/servicios", (req, res) => {
    res.send("estas en la pagina de servicios");
});


app.listen(port, () => {
    console.log("servidor a sus servivio en el puerto", port);
});