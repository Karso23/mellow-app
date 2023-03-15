// Importacion Base de Datos
const usersDb = require('../db/userList.js');

// Controller
const update_user = (req, res) => {
  try {
    const { id, nombre, edad } = req.body;

    if (!id)
      throw Error(
        'Es necesario que indiques el id del usuario para poder actualizarlo'
      );

    const indexUser = usersDb.findIndex((e) => e.id === id);

    if (indexUser) {
      usersDb[indexUser].nombre = nombre;
      usersDb[indexUser].edad = edad;
    }

    res
      .status(200)
      .json(`El usuario numero: ${id} fue actualizado correctamente`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = update_user;
