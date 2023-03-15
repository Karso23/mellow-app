import './styles/App.css';
import Users from './components/Users';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Loading from './components/Loading';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Users />} />
        <Route path="/*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
