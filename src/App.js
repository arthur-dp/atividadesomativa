import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemIndex, setMensagemIndex] = useState(null);

  const mensagens = [
    'Acessado com sucesso!',
    'Usuário ou senha incorretos!'
  ];

  const validarCredenciais = () => {
    if (email === 'eduardo.lino@pucpr.br' && senha === '123456') {
      setMensagemIndex(0);
    } else {
      setMensagemIndex(1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="main-title">Atividade Somativa</h1>
        <div className="student-name">Aluno: Arthur</div>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
        />
        <button onClick={validarCredenciais}>Acessar</button>
        <label>{mensagemIndex !== null ? mensagens[mensagemIndex] : ''}</label>
      </header>
    </div>
  );
}

export default App;