import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ConfirmarAgendamento.css";

function ConfirmarAgendamento() {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate("/cadastro");
  };

  const handleConfirmar = () => {
    alert("Agendamento confirmado!");
  };

  return (
    <div className="confirmar-page-container">
      <header className="confirmar-page-header">
        <img src="/logo-bezy.png" alt="Logo Bezy" className="confirmar-page-logo" />
        <nav>
          <Link to="/">Início</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/sobre">Sobre Nós</Link>
        </nav>
        <div className="confirmar-page-icone">
      <img src="icone-perfil.png" alt="Perfil" className="profissionais-perfil-icon" />
        </div>
      </header>

      <main className="confirmar-page-main">
        <div className="confirmar-page-detalhes">
          <h2>Confirmar detalhes</h2>
          <p className="confirmar-page-info"><strong>Serviço:</strong> Corte feminino</p>
          <p className="confirmar-page-info"><strong>Data:</strong> 25 de maio</p>
          <p className="confirmar-page-info"><strong>Horário:</strong> 14:00</p>
          <p className="confirmar-page-info"><strong>Pagamento:</strong> Cartão Mastercard final 1234</p>
          <p className="confirmar-page-info"><strong>Endereço:</strong> Av. Paulista, 1000</p>
          <p className="confirmar-page-info"><strong>Preço:</strong> R$ 60,00</p>

          <div className="confirmar-page-botoes">
  <Link to="/profissionais" className="confirmar-page-botao-voltar">‹ Voltar</Link>
  <button className="confirmar-page-botao-confirmar" onClick={handleConfirmar}>Confirmar Agendamento</button>
</div>

        </div>

        <div className="confirmar-page-card">
          <img src="/carla.png" alt="Carla Souza" />
          <h3>Carla Souza</h3>
          <div className="confirmar-page-stars">★★★★★</div>
          <p className="confirmar-page-avaliacoes">(87 avaliações) <span style={{ color: "#f5c518" }}>(4.8)</span></p>
          <p className="confirmar-page-distancia">2,3 km de você</p>
          <p className="confirmar-page-servicos">Corte feminino, corte infantil</p>
        </div>
      </main>
    </div>
  );
}

export default ConfirmarAgendamento;
