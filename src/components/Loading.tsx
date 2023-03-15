import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 500);
  }, []);

  return (
    <div>
      <h1>Borrando Usuario...</h1>
    </div>
  );
};

export default Loading;
