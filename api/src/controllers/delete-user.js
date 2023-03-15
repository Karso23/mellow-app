// Importacion Base de Datos
const usersDb = require('../db/userList.js');

// Controller
const delete_user = (req, res) => {
  try {
    const { id } = req.body;
    console.log({ id });

    if (!id) throw Error('Es necesario el id del usuario para poder borrarlo');

    const indexToDelete = usersDb.findIndex((e) => e.id === id);
    console.log(indexToDelete);

    if (indexToDelete < 0) throw Error('El usuario no fue encontrado');

    usersDb.splice(indexToDelete, 1);

    res.status(200).json(`Usuario fue borrado exitosamente`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = delete_user;
