const express = require('express');
const {create} = require('express-handlebars');
const app = express();

//Partials
const hbs = create({
    partialsDir: ["views/partials"],
    extname: ".hbs"
});

//motor de plantillas
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', './views');


app.get('/', (req, res) => {
    const productos = ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"];

    res.render('home', { productos });
});


//Middleware
app.use(express.static(__dirname + '/public'));
app.use("/css/bootstrap.min.css", express.static(__dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css'));
app.use("/js/bootstrap.min.js", express.static(__dirname + '/node_modules/bootstrap/dist/js/bootstrap.min.js'));



app.listen(5000, () => console.log('Servidor ok'));


