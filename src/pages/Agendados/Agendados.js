import React from 'react';
import { Link } from 'react-router-dom';
import './Agendados.css';

export default function Agendados() {
  const agendamentos = [
    {
      nome: 'Nathalia Luz',
      servico: 'Corte de cabelo',
      horario: '14:00',
      endereco: 'Av. Dezessete de Agosto, 270 - Parnamirim, Recife - PE, 52060-590',
      foto: 'nathalia.png'
    },
    {
      nome: 'Amanda',
      servico: 'Corte de cabelo',
      horario: '15:00',
      endereco: 'Av. Dezessete de Agosto, 2720 - Monteiro, Recife - PE, 52061-105',
      foto: 'amanda.png'
    }
  ];

  return (
    <div className="agendados-wrapper">
      <header className="agendados-header">
        <img src="logo-bezy.png" alt="Logo Bezy" className="agendados-logo" />
        <nav className="agendados-nav">
          <Link to="/">Início</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/sobre">Sobre Nós</Link>
        </nav>
        <img src="icone-perfil.png" alt="Perfil" className="agendados-perfil-icon" />
      </header>

      <main className="agendados-main">
        <h1 className="agendados-titulo">Serviços agendados</h1>

        {agendamentos.map((agendamento, index) => (
          <div className="agendados-card" key={index}>
            <div className="agendados-info">
              <img src={agendamento.foto} alt={agendamento.nome} className="agendados-foto" />
              <div>
                <strong>{agendamento.nome}</strong>
                <p>{agendamento.servico}</p>
              </div>
            </div>
            <div className="agendados-detalhes">
              <p><strong>Horário:</strong> {agendamento.horario}</p>
              <p><strong>Endereço:</strong> {agendamento.endereco}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
