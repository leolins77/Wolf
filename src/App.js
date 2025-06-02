import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Inicio from './pages/Inicio/Inicio'; 
import CadastroUser from './pages/CadastroUser/CadastroUser'; 
import ConfirmarAgendamento from './pages/ConfirmarAgendamento/ConfirmarAgendamento'; 
import Sobre from './pages/Sobre/Sobre';
import Contato from './pages/Contato/Contato';
import Servicos from './pages/Servicos/Servicos';
import Profissionais from './pages/Profissionais/Profissionais';
import Agendados from './pages/Agendados/Agendados';

function App() {
  return (
    <Router> 
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} /> 
          <Route path="/cadastro" element={<CadastroUser />} /> 
          <Route path="/confirmar" element={<ConfirmarAgendamento />} /> 
          <Route path="/sobre" element={<Sobre />} /> 
          <Route path="/contato" element={<Contato />} /> 
          <Route path="/servicos" element={<Servicos />} /> 
          <Route path="/profissionais" element={<Profissionais />} /> 
          <Route path="/agendados" element={<Agendados/>} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

