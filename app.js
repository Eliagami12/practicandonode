const express = require('express');
const send = require('send');
const app = express();
const port = 3000;
//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"))

app.use('/', require ('./router/rutasWeb.js'))

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