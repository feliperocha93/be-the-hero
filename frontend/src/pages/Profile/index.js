import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import { Context } from '../../auth/authContext';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const { handleLogout } = useContext(Context);

  const ongId = +localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');
  const token = localStorage.getItem('token');

  useEffect(() => {
    api.get(`profile?id=${ongId}`)
      .then(response => {
        setIncidents(response.data);
      });
  }, [ongId, token]);

  async function handleDeleteIncident(id, title) {
    try {
      await api.delete(`incidents?id=${id}&ongid=${ongId}`);

      setIncidents(incidents.filter(incident => incident.id !== id));
      alert(`O caso ${title} foi deletado.`);
    } catch (error) {
      alert('Erro ao deletar caso. Tente novamente')
    }
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem-vindo, {ongName}</span>

        <Link className="button" to="/incidents/new" title="Cadastrar novo caso">
          Cadastrar novo caso
        </Link>
        <button
          title="Sair"
          type="button"
          onClick={handleLogout}
        >
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>VALOR:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

            <button
              title="Deletar caso"
              type="button"
              onClick={() => handleDeleteIncident(incident.id, incident.title)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
