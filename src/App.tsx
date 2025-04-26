import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import StyledProfile from './pages/StyledProfile';
import TailwindProfile from './pages/TailwindProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redireciona o / para /styled */}
        <Route path="/" element={<Navigate to="/styled" />} />
        <Route path="/styled" element={<StyledProfile />} />
        <Route path="/tailwind" element={<TailwindProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
