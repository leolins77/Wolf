import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./CadastroUser.css";

function CadastroUser() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('cliente'); // cliente ou profissional
  const [especialidades, setEspecialidades] = useState('');
  const [endereco, setEndereco] = useState('');
  const [descricao, setDescricao] = useState('');
  const [erro, setErro] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !email || !senha || !confirmarSenha || !dataNascimento) {
      setErro('Todos os campos são obrigatórios!');
      return;
    }

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem!');
      return;
    }

    if (tipoUsuario === 'profissional') {
      if (!especialidades || !endereco || !descricao) {
        setErro('Todos os campos do perfil profissional são obrigatórios!');
        return;
      }
    }

    setErro('');
    alert('Cadastro realizado com sucesso!');
    navigate('/confirmar');
  };

  return (
    <div className="cadastro-page-container">
      <h2 className="cadastro-page-title">Cadastro de Usuário</h2>
      {erro && <div className="cadastro-page-error">{erro}</div>}
      <form className="cadastro-page-form" onSubmit={handleSubmit}>
        <div className="cadastro-page-campo">
          <label htmlFor="tipoUsuario">Você é:</label>
          <select
            id="tipoUsuario"
            value={tipoUsuario}
            onChange={(e) => setTipoUsuario(e.target.value)}
          >
            <option value="cliente">Cliente</option>
            <option value="profissional">Profissional</option>
          </select>
        </div>

        <div className="cadastro-page-campo">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="cadastro-page-campo">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="cadastro-page-campo">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div className="cadastro-page-campo">
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
        </div>
        <div className="cadastro-page-campo">
          <label htmlFor="dataNascimento">Data de Nascimento</label>
          <input
            type="date"
            id="dataNascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
        </div>

        {tipoUsuario === 'profissional' && (
          <>
            <div className="cadastro-page-campo">
              <label htmlFor="especialidades">Especialidades</label>
              <input
                type="text"
                id="especialidades"
                value={especialidades}
                onChange={(e) => setEspecialidades(e.target.value)}
              />
            </div>
            <div className="cadastro-page-campo">
              <label htmlFor="endereco">Endereço</label>
              <input
                type="text"
                id="endereco"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </div>
            <div className="cadastro-page-campo">
              <label htmlFor="descricao">Descrição</label>
              <textarea
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                rows="4"
                className="cadastro-page-textarea"
              />
            </div>
          </>
        )}

        <button className="cadastro-page-botao" type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroUser;
