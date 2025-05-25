import React from "react";
import { Link } from "react-router-dom";
import './Profissionais.css';

export default function Profissionais() {
  return (
    <div className="profissionais-wrapper">
      <header className="profissionais-header">
        <img src="logo-bezy.png" alt="Logo Bezy" className="profissionais-logo" />
        <nav className="profissionais-nav">
          <Link to="/">Início</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/sobre">Sobre Nós</Link>
        </nav>
        <img src="icone-perfil.png" alt="Perfil" className="profissionais-perfil-icon" />
      </header>

      <main className="profissionais-main">
        <Link to="/servicos" className="profissionais-voltar">‹ voltar</Link>

        <div className="profissionais-header-textos">
          <h1 className="profissionais-titulo">Cabeleireiro</h1>
          <p className="profissionais-subtitulo">Escolha o profissional ideal para te atender em casa</p>

          <div className="profissionais-filtro">
            <label htmlFor="ordenar">Ordenar por:</label>
            <select id="ordenar">
              <option value="avaliacao">Avaliação</option>
              <option value="distancia">Distância</option>
            </select>
          </div>
        </div>

        <div className="profissionais-grid">
          <div className="profissionais-card">
            <img src="carla.png" alt="Carla Souza" className="profissionais-foto" />
            <div className="profissionais-info">
              <h3 className="profissionais-nome">Carla Souza</h3>
              <p className="profissionais-avaliacao">⭐ 4.8 (87 avaliações)</p>
              <p className="profissionais-distancia">2,3 km de você</p>
              <p className="profissionais-servicos">Corte feminino, corte infantil</p>
              <Link to="/confirmar" className="profissionais-agendar">Agendar</Link>
            </div>
          </div>

          <div className="profissionais-card">
            <img src="fernanda.png" alt="Fernanda Castro" className="profissionais-foto" />
            <div className="profissionais-info">
              <h3 className="profissionais-nome">Fernanda Castro</h3>
              <p className="profissionais-avaliacao">⭐ 4.8 (76 avaliações)</p>
              <p className="profissionais-distancia">2,0 km de você</p>
              <p className="profissionais-servicos">Corte feminino, franja, em camadas</p>
              <button className="profissionais-agendar">Agendar</button>
            </div>
          </div>

          <div className="profissionais-card">
            <img src="nathalia.png" alt="Nathalia Luz" className="profissionais-foto" />
            <div className="profissionais-info">
              <h3 className="profissionais-nome">Nathalia Luz</h3>
              <p className="profissionais-avaliacao">⭐ 4.7 (53 avaliações)</p>
              <p className="profissionais-distancia">2,3 km de você</p>
              <p className="profissionais-servicos">Corte bob hair, pixie cut</p>
              <button className="profissionais-agendar">Agendar</button>
            </div>
          </div>

          <div className="profissionais-card">
            <img src="priscila.png" alt="Priscila Martins" className="profissionais-foto" />
            <div className="profissionais-info">
              <h3 className="profissionais-nome">Priscila Martins</h3>
              <p className="profissionais-avaliacao">⭐ 4.9 (68 avaliações)</p>
              <p className="profissionais-distancia">8,5 km de você</p>
              <p className="profissionais-servicos">Corte médio, reto, camadas longas</p>
              <button className="profissionais-agendar">Agendar</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
