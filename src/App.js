import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ListUser from './pages/ListUser'
import aPropos from './pages/aPropos'

export default function App() {

  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/liste" component={ListUser} />
      <Route path="/aPropos" component={aPropos} />
    </Router>

  )
}
