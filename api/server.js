// Importamos la libreria de express

const //
  express = require('express'),
  cors = require('cors'),
  server = express();

// Importaciones de controllers
const //
  add_user = require('./src/controllers/add-user.js'),
  delete_user = require('./src/controllers/delete-user.js'),
  get_all_users = require('./src/controllers/get-users.js'),
  update_user = require('./src/controllers/update-user.js');

// Constantes
const PORT = 3001;

//! Configuraciones para el servidor
server.use(cors());
server.use(express.json());
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//Peticiones CRUD al servidor
server.get('/users', cors(), get_all_users);
server.post('/', cors(), add_user);
server.put('/', cors(), update_user);
server.delete('/', cors(), delete_user);

// Inciamos el servidor
server.listen(PORT, () => {
  console.log(`Server Online listening at: ${PORT} port....`);
});
