import React from "react";
import { useNavigate } from "react-router-dom";
import "./Inicio.css";

function Inicio() {
  const navigate = useNavigate();

  const irParaCadastro = () => {
    navigate("/cadastro");
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

      {/* Seção: Benefícios */}
      <section className="secao-beneficios">
        <h2>Por que escolher a Bezy?</h2>
        <div className="beneficios-lista">
          <div className="beneficio">
            <img src="/icone-comodidade.png" alt="Comodidade total" />
            <h3>COMODIDADE TOTAL</h3>
            <p><strong>Atendimento onde e quando você quiser, direto da sua casa.</strong></p>
          </div>
          <div className="beneficio">
            <img src="/icone-profissionais.png" alt="Profissionais" />
            <h3>PROFISSIONAIS QUALIFICADOS</h3>
            <p><strong>Todos os parceiros são avaliados e certificados.</strong></p>
          </div>
          <div className="beneficio">
            <img src="/icone-agendamento.png" alt="Agendamento fácil" />
            <h3>AGENDAMENTO RÁPIDO E FÁCIL</h3>
            <p><strong>Em poucos cliques, escolha o serviço, horário e profissional.</strong></p>
          </div>
          <div className="beneficio">
            <img src="/icone-higiene.png" alt="Higiene e segurança" />
            <h3>HIGIENE E SEGURANÇA</h3>
            <p><strong>Protocolos rigorosos de limpeza e cuidado com o cliente.</strong></p>
          </div>
        </div>
      </section>

      {/* Seção: Serviços */}
      <section className="secao-servicos">
        <h2>Serviços oferecidos</h2>
        <div className="servicos-lista">
          <div className="servico">
            <img src="/icone-corte.png" alt="Corte de cabelo" />
            <span>Corte de cabelo</span>
          </div>
          <div className="servico">
            <img src="/icone-mao.png" alt="Manicure e Pedicure" />
            <span>Manicure e Pedicure</span>
          </div>
          <div className="servico">
            <img src="/icone-maquiagem.png" alt="Maquiagem" />
            <span>Maquiagem</span>
          </div>
          <div className="servico">
            <img src="/icone-sobrancelha.png" alt="Sobrancelha e Depilação" />
            <span>Sobrancelha e Depilação</span>
          </div>
          <div className="servico">
            <img src="/icone-massagem.png" alt="Massagem" />
            <span>Massagem</span>
          </div>
          <div className="servico">
            <img src="/icone-barbearia.png" alt="Barbearia" />
            <span>Barbearia</span>
          </div>
        </div>
        <p className="ver-todos">• ver todos os serviços</p>
      </section>

      {/* Seção: Como usar */}
      <section className="secao-como-usar">
        <div className="texto">
          <h2>Como usar a Bezy?</h2>
          <ul>
            <li><img src="/icone-app.png" alt="" /> Baixe o app ou use pelo site</li>
            <li><img src="/icone-escolha.png" alt="" /> Escolha o serviço e o profissional</li>
            <li><img src="/icone-agende.png" alt="" /> Agende a data e o local</li>
            <li><img src="/icone-relaxa.png" alt="" /> Relaxa. A beleza vai até você</li>
          </ul>
        </div>
        <div className="imagem">
          <img src="/imagem-como-usar.png" alt="Massagem" />
        </div>
      </section>

      {/* Seção: Depoimentos */}
      <section className="secao-depoimentos">
        <h2>Clientes satisfeitos 💜</h2>
        <div className="depoimentos-lista">
          <blockquote>
            “Amei a experiência! A profissional foi pontual, educada e super talentosa.”<br />
            <strong>— Juliana S., Recife</strong>
          </blockquote>
          <blockquote>
            “Muito mais prático do que ir ao salão. Virei cliente fiel!”<br />
            <strong>— Fernanda A., SP</strong>
          </blockquote>
        </div>
      </section>

      {/* Seção: Final */}
      <section className="secao-final">
        <h2>PRONTA PARA SUA TRANSFORMAÇÃO?</h2>
        <p>Agende agora e tenha uma experiência única de beleza em casa.</p>
        <button onClick={irParaCadastro}>CRIAR CONTA</button>
      </section>
    </div>
  );
}

export default Inicio;
