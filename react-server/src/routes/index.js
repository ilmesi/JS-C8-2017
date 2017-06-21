import React from 'react'
import { Route } from 'react-router'
import { Redirect, Switch } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../containers/Login'
import Logout from '../containers/Logout'

const Routes = (store) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" render={() => (
      store.getState().auth.token ? (
        <Redirect to="/"/>
      ) : (
        <Login />
      )
    )} />
    <Route path="/logout" component={Logout} />
  </Switch>
)

export default Routes
