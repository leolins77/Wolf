import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Inicio.css";

function Inicio() {
  const navigate = useNavigate(); 

  const irParaCadastro = () => {
    navigate('/cadastro'); 
  };

  return (
    <div className="inicio-page-container">
      <header className="inicio-page-header">
        <div className="inicio-page-logo">
          <img src="/logo-bezy.png" alt="Bezy Logo" />
        </div>
        <nav className="inicio-page-navegacao">
          <a href="#" onClick={irParaCadastro}>Criar conta</a>
          <a href="#" onClick={irParaCadastro}>Entrar</a>
        </nav>
      </header>

      <main className="inicio-page-hero">
        <div className="inicio-page-hero-texto">
          <h1>Beleza que vai até você.</h1>
          <p>Agende serviços de beleza e bem-estar no conforto da sua casa, com profissionais verificados e altamente qualificados.</p>
          <button className="inicio-page-botao-entrar" onClick={irParaCadastro}>Entrar</button>
        </div>
        <div className="inicio-page-hero-imagem">
          <img src="/hero-image.png" alt="Atendimento de beleza" />
        </div>
      </main>
    </div>
  );
}

export default Inicio;
