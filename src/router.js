import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Landing/Landing.js'
import Login from './Login/Login.js'
import Profile from './Profile/Profile.js'




export default (
    <Switch>
        <Route component={Landing} path='/' exact/>
        <Route component={Login} path='/login' />
        <Route component={Profile} path='/profile' />

    </Switch>
)