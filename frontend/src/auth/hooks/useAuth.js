import { useState, useEffect } from 'react';
import api from '../../services/api';
import history from '../../history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, [])

  async function handleLogin(email, password) {
    try {
      const { data: { id, name, token } } = await api.post('/sessions', { email, password });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', name);
      localStorage.setItem('token', JSON.stringify(token));

      // history.push('/profile');
      window.location = '/profile';
    } catch (error) {
      alert('Falha no login, tente novamente');
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.clear();
    api.defaults.headers.Authorizathion = undefined;
    history.push('/');
  }

  return { loading, authenticated, handleLogin, handleLogout }
}