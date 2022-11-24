import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboaardScreen from '../pages/dashboard_screen';
import LandingScreen from '../pages/landing_screen';
import SignInScreen from '../pages/signin_screen';
import SignUpScreen from '../pages/signup_screen';
import RouteLayout from './RouteLayout';

export class PageRoutes extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<RouteLayout />}>
            <Route index element={<LandingScreen />} />
            <Route path='/signin' element={<SignInScreen />} />
            <Route path='/signup' element={<SignUpScreen />} />
            <Route path='/dashboard' element={<DashboaardScreen />} />
          </Route>
        </Routes>
      </Router>
    )
  }
}

export default PageRoutes