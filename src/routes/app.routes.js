import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardScreen from '../pages/dashboard_screen';
import ForestPatchScreen from '../pages/forestpatch_screen';
import LandingScreen from '../pages/landing_screen';
import SignInScreen from '../pages/signin_screen';
import SignUpScreen from '../pages/signup_screen';
import WaterbodyScreen from '../pages/waterbody_screen';
import WildfireScreen from '../pages/wildfire_screen';

export class PageRoutes extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<LandingScreen />} />
          <Route path='/waterbody' element={<WaterbodyScreen />} />
          <Route path='/forestpatch' element={<ForestPatchScreen />} />
          <Route path='/wildfire' element={<WildfireScreen />} />
          <Route path='/signin' element={<SignInScreen />} />
          <Route path='/signup' element={<SignUpScreen />} />
          <Route path='/dashboard' element={<DashboardScreen />} />
        </Routes>
      </Router>
    )
  }
}

export default PageRoutes