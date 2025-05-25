import React from "react";
import { Link } from "react-router-dom";
import "./Sobre.css";

function Sobre() {
  return (
    <div className="sobre-container">
      <header className="sobre-header">
        <img src="/logo-bezy.png" alt="Logo Bezy" className="sobre-logo" />
        <nav>
          <Link to="/">Início</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/sobre">Sobre Nós</Link>
        </nav>
        <div className="sobre-icone">
          <img src="icone-perfil.png" alt="Perfil" className="servicos-perfil-icon" />
        </div>
      </header>

      <div className="sobre-banner">
        <img
          src="/imagem-sobre.jpg"
          alt="Banner Quem Somos"
          className="sobre-banner-img"
        />
        <h1 className="sobre-titulo"><strong>Quem Somos</strong></h1>
      </div>

      <main className="sobre-conteudo">
        <section>
          <h2>Introdução</h2>
          <p>
           <strong> Somos apaixonados por transformar ideias em soluções criativas. Desde o início, nossa missão tem sido unir estética, funcionalidade e propósito para entregar serviços que conectam com as pessoas de verdade. </strong>
          </p>
        </section>

        <section>
          <h2>Origem</h2>
          <p>
            <strong> A empresa surgiu como um projeto desenvolvido durante a faculdade Cesar School, impulsionado pelo desejo de criar algo próprio, relevante e inovador.
            Mesmo começando de forma simples, com recursos limitados, mantivemos uma visão clara desde o início: fazer diferente. Ao longo do tempo, evoluímos, aprendemos com cada etapa do processo e seguimos fiéis à nossa essência. </strong>
          </p>
        </section>

        <section>
          <p><strong>Missão: Criar soluções que fazem a diferença.</strong></p>
          <p><strong>Visão: Ser referência em inovação, design e atendimento.</strong></p>
          <p><strong>Valores: Criatividade, autenticidade, respeito e comprometimento.</strong></p>
        </section>

        <section>
          <p>
           <strong> Estamos apenas no começo. Se você acredita em autenticidade e inovação, vem com a gente. Vamos construir juntos algo incrível.</strong>
          </p>
        </section>
      </main>
    </div>
  );
}

export default Sobre;
