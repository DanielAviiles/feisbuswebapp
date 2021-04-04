const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const cors = require('cors');

// inicio
const app = express();

// Configuraciones
app.set('port', process.env.PORT || 4000);

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

// Peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// variables globales
app.use((req, res, next) => {
  /* 
    Descativa la politica de CORS a cada peticion que se realiza al backend
    dando a entender que la respuesta de la API es de confianza y ademas
    agregandole el comodin * se podría usar en cualquier otro Fronted
  */
  req.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// rutas
app.use(require('./routes'));
app.use('/api/service/authentication',require('./routes/auth')); // Completo
app.use('/api/service/data-basic-user',require('./routes/index'));
app.use('/api/service/posteos',require('./routes/index'));

// public
app.use(express.static(path.join(__dirname, 'public')));
// app.unsubscribe(express.static(path.join(__dirname, 'public')));

// inicia el server
app.listen(app.get('port'), () => {
  console.log('Server on port: ', app.get('port'));
});
