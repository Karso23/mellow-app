import { useNavigate } from 'react-router-dom';

// Interface para tipar el tipo de datos de las Props que recibira el componente
interface Props {
  id: number;
  name: string;
  edad: number;
}

const User = ({ id, name, edad }: Props) => {
  const navigate = useNavigate();
  const handlerDelete = () => {
    const fetchRequestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    };

    fetch(`http://localhost:3001`, fetchRequestOptions)
      .then((response) => response.json())
      .catch((error) => console.log(error));

    navigate('/');
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          border: 'solid',
          margin: '20px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ marginLeft: '50px' }}>
          <h3>Id Usuario: {id}</h3>
          <h1>Nombre: {name}</h1>
          <h1>Edad: {edad}</h1>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginRight: '70px',
          }}
        >
          <img
            src="/user-image.jpg"
            alt="imagen usuario"
            style={{
              marginBottom: '20px',
              width: '100px',
            }}
          />
          <button
            onClick={handlerDelete}
            value={id}
            style={{
              fontSize: 'larger',
              fontWeight: 'bolder',
              borderRadius: '5px',
            }}
          >
            Borrar
          </button>
        </div>
      </div>
    </>
  );
};

export default User;
