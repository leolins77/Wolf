import React from "react";
import "./Inicio.css";

function Inicio() {
  return (
    <div className="inicio-container">
      <header className="inicio-header">
        <div className="logo">
          <img src="/logo-bezy.png" alt="Bezy Logo" />
        </div>
        <nav className="navegacao">
          <a href="#">Criar conta</a>
          <a href="#">Entrar</a>
        </nav>
      </header>

      <main className="hero">
        <div className="hero-texto">
          <h1>Beleza que vai até você.</h1>
          <p>Agende serviços de beleza e bem-estar no conforto da sua casa, com profissionais verificados e altamente qualificados.</p>
          <button className="botao-entrar">Entrar</button>
        </div>
        <div className="hero-imagem">
          <img src="/hero-image.png" alt="Atendimento de beleza" />
        </div>
      </main>
    </div>
  );
}

export default Inicio;