import './App.css';
import Login from './component/pages/Login';
import Home from './component/pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './component/pages/Register';
function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
