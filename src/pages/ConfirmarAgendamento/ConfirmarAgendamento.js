import React from "react";
import "./ConfirmarAgendamento.css";

function ConfirmarAgendamento() {
  return (
    <div className="container">
      <header className="header">
        <h1>bezy</h1>
        <nav>
          <a href="#">Início</a>
          <a href="#">Serviços</a>
          <a href="#">Favoritos</a>
        </nav>
        <div>
          <span role="img" aria-label="perfil">👤</span>
        </div>
      </header>

      <main className="main">
        <div className="detalhes">
          <h2>Confirmar detalhes</h2>
          <p className="info"><strong>Serviço:</strong> Corte feminino</p>
          <p className="info"><strong>Data:</strong> 25 de maio</p>
          <p className="info"><strong>Horário:</strong> 14:00</p>
          <p className="info"><strong>Pagamento:</strong> Cartão Mastercard final 1234</p>
          <p className="info"><strong>Endereço:</strong> Av. Paulista, 1000</p>
          <p className="info"><strong>Preço:</strong> R$ 60,00</p>

          <div className="botoes">
            <button className="botao-voltar">‹ Voltar</button>
            <button className="botao-confirmar">Confirmar Agendamento</button>
          </div>
        </div>

        <div className="card">
          <img src="/carla.png" alt="Carla Souza" />
          <h3>Carla Souza</h3>
          <div className="stars">★★★★★</div>
          <p className="avaliacoes">(87 avaliações) <span style={{ color: "#f5c518" }}>(4.8)</span></p>
          <p className="distancia">2,3 km de você</p>
          <p className="servicos">Corte feminino, corte infantil</p>
        </div>
      </main>
    </div>
  );
}

export default ConfirmarAgendamento;
