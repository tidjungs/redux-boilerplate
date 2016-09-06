import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import {
	App,
	HelloWorld,
	Pages
} from './components'

export default () => {
  return (
    <Router history={ browserHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ HelloWorld } />
        <route path='page' component={ Pages } />
      </Route>
    </Router>
  )
}