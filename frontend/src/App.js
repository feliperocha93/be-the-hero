import React from "react";
import { Router } from 'react-router-dom';
import history from './history';

import { AuthProvider } from "./auth/authContext";

import './global.css';

import Routes from './routes';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
