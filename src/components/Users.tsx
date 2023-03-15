import { useEffect, useState } from 'react';
import axios from 'axios';
import User from './User';

const api = axios.create({
  baseURL: 'https://localhost:3000',
});

const Users = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      return await fetch('http://localhost:3001/users')
        .then((res) => res.json())
        .then((data) => setUsers(data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {users.length < 1 ? (
        <h1>No existen registros de Usuarios</h1>
      ) : (
        <div>
          <h1>Lista de Usuarios</h1>
          <div>
            {users.map(({ id, nombre, edad }, i) => (
              <User key={i} id={id} name={nombre} edad={edad} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Users;
