import React from "react";
import { Link } from "react-router-dom";
import './Servicos.css';

export default function Serviços() {
  return (
    <div className="servicos-wrapper">
      <header className="servicos-header">
        <img src="logo-bezy.png" alt="Logo Bezy" className="servicos-logo" />
        <nav className="servicos-nav">
          <Link to="/">Início</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/agendado">Sobre Nós</Link>
        </nav>
        <img src="icone-perfil.png" alt="Perfil" className="servicos-perfil-icon" />
      </header>

      <main className="servicos-main">
        <h1 className="servicos-titulo">Serviços</h1>
        <div className="servicos-grid">
        <Link to="/profissionais" className="servicos-item">
        <img src="cabeleireiro.png" alt="Cabeleireiro" />
        <span><strong>Cabeleireiro</strong></span>
      </Link>
        <div className="servicos-item">
        <img src="manicure.png" alt="Manicure e Pedicure" />
        <span><strong>Manicure e Pedicure</strong></span>
        </div>
          <div className="servicos-item">
            <img src="maquiagem.png" alt="Maquiagem" />
            <span><strong>Maquiagem</strong></span>
          </div>
          <div className="servicos-item">
            <img src="sobrancelha.png" alt="Sobrancelha e Depilação" />
            <span><strong>Sobrancelha e Depilação</strong></span>
          </div>
          <div className="servicos-item">
            <img src="massagem.png" alt="Massagem" />
            <span><strong>Massagem</strong></span>
          </div>
          <div className="servicos-item">
            <img src="barbearia.png" alt="Barbearia" />
            <span><strong>Barbearia</strong></span>
          </div>
        </div>

        <p className="servicos-subtexto">
          <em><strong>Encontre o serviço ideal para você sem sair de casa!</strong></em>
        </p>
      </main>
    </div>
  );
}
