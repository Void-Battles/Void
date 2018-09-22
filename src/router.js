import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'

export default (
  <Switch>
    <Route component={Landing} path="/" exact />
    <Route component={Login} path="/login" />
    <Route component={Register} path="/register" />
    <Route component={Profile} path="/my-profile" />
    <Route component={Profile} path="/vb-profile/:profile_id" />
  </Switch>
)
