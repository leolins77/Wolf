import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./CadastroUser.css";

function CadastroUser() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [erro, setErro] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !email || !senha || !dataNascimento || !confirmarSenha) {
      setErro('Todos os campos são obrigatórios!');
      return;
    }

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem!');
      return;
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
        <button className="cadastro-page-botao" type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroUser;