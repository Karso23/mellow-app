// Importacion Base de Datos
const usersDb = require('../db/userList.js');

// Controller
const get_all_users = (req, res) => {
  try {
    res.status(200).json(usersDb);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = get_all_users;
