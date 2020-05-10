import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { Context } from '../../auth/authContext';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  const { handleLogin } = useContext(Context);

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(email, password);
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={(e) => handleSubmit(e)}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setpassword(e.target.value)}
          />
          <button
            title="Entrar"
            className="button"
            type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register" title="Não tenho cadastro">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>

      </section>

      <img className="heroes-img" src={heroesImg} alt="Heroes" />
    </div>
  );
}
