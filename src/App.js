import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // 

import Inicio from './pages/Inicio/Inicio'; 
import CadastroUser from './pages/CadastroUser/CadastroUser'; 
import ConfirmarAgendamento from './pages/ConfirmarAgendamento/ConfirmarAgendamento'; 

function App() {
  return (
    <Router> 
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} /> 
          <Route path="/cadastro" element={<CadastroUser />} /> 
          <Route path="/confirmar" element={<ConfirmarAgendamento />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

