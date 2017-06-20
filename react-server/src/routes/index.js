import React from 'react'
import { Route } from 'react-router'
import { Redirect, Switch } from 'react-router-dom'
import Home from '../containers/Home'
import Login from '../containers/Login'

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
  </Switch>
)

export default Routes
