import React from "react";
import { Link } from "react-router-dom";
import "./Contato.css";

const Contato = () => {
  return (
    <div className="contato-container">
      <header className="contato-header">
        <img src="/logo-bezy.png" alt="Logo Bezy" className="contato-logo" />
        <nav>
          <Link to="/">Início</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/sobre">Sobre Nós</Link>
        </nav>
        <div className="contato-icone">
          <img src="icone-perfil.png" alt="Perfil" className="servicos-perfil-icon" />
        </div>
      </header>

      <main className="contato-main">
        <section className="contato-banner">
          <h1>Entre em Contato</h1>
        </section>

        <section className="contato-info">
          <p>
            Tem dúvidas, sugestões ou quer fazer parte do nosso projeto?
            Estamos disponíveis para conversar. Use os canais abaixo ou preencha o formulário.
          </p>
          <ul>
            <li>📧 E-mail: contato@bezy.com</li>
            <li>📱 WhatsApp: (00) 91234-5678</li>
            <li>📸 Redes sociais: Instagram, Facebook, TikTok (@bezy)</li>
          </ul>
        </section>

        <section className="contato-equipe">
          <div className="contato-pessoa">
            <img src="/foto-leonardo.jpg" alt="Leonardo Lins" />
            <a href="https://linkedin.com/in/leonardo-lins-343265317/">Leonardo Lins</a>
          </div>
          <div className="contato-pessoa">
            <img src="/foto-joao.jpg" alt="João Eduardo" />
            <a href="https://www.linkedin.com/in/joão-eduardo-7543481b8/">João Eduardo</a>
          </div>
          <div className="contato-pessoa">
            <img src="/foto-jonas.jpg" alt="Jonas Lima" />
            <a href="https://www.linkedin.com/in/jonas-lima99/">Jonas Lima</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contato;
