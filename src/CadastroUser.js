import React, { useState } from 'react';
import "./CadastroUser.css";

function CadastroUser() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [erro, setErro] = useState('');

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
  };

  return (
    <div className="cadastro-user">
      <h2>Cadastro de Usuário</h2>
      {erro && <div className="error">{erro}</div>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="dataNascimento">Data de Nascimento</label>
          <input
            type="date"
            id="dataNascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroUser;
