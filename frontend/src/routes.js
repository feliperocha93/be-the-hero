import React, { useContext } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import { Context } from './auth/authContext';

import Logon from './pages/Logon';
import NewIncident from './pages/NewIncident';
import Profile from './pages/Profile';
import Register from './pages/Register';

function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h3>Carregando...</h3>
  }

  if (isPrivate && !authenticated) {
    return <Redirect to='/' />
  }

  return <Route {...rest} />
}

export default function Routes() {

  return (
    <Switch >
      <CustomRoute exact path='/' component={Logon} />
      <CustomRoute exact path='/register' component={Register} />

      <CustomRoute isPrivate exact path='/profile' component={Profile} />
      <CustomRoute isPrivate exact path='/incidents/new' component={NewIncident} />
    </Switch>
  );
}