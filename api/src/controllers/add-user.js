// Importacion Base de Datos
const usersDb = require('../db/userList.js');

// Controller
const add_user = (req, res) => {
  try {
    const newUser = ({ id, nombre, edad } = req.body);

    usersDb.push(newUser);

    res.status(200).json('El usuario fue creado exitosamente!!');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = add_user;
