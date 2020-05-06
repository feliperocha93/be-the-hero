import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      // const response = await api.post('sessions', { email, password });
      const response = await api.get(`ongs?email=${email}&password=${password}`);

      // localStorage.setItem('ongName', response.data.name);
      localStorage.setItem('ongName', response.data[0].name);

      if (response.data.length > 0) {
        history.push('/profile');
      } else {
        alert('Usuário ou senha inválido');
      }

    } catch (err) {
      alert('Falha no login, tente novamente');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
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
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>

      </section>

      <img className="heroes-img" src={heroesImg} alt="Heroes" />
    </div>
  );
}
