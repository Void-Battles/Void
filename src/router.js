import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register'
import Profile from './components/Profile/Profile'
import RegisterTeam from './components/RegisterTeam/RegisterTeam'
import Team from './components/Team/Team'

export default (
  <Switch>
    <Route component={Landing} path="/" exact />
    <Route component={Login} path="/login" />
    <Route component={Register} path="/register" />
    <Route component={Profile} path="/my-profile" />
    <Route component={Profile} path="/vb-profile/:profile_name" />
    <Route component={RegisterTeam} path="/register-team" />
    <Route component={Team} path="/my-team" />
    <Route component={Team} path="/vb-team/:team_name" />
  </Switch>
)
