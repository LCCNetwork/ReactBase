import './main.html'
import './test.html'

import React from 'react'
import {render} from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import style from './main.scss'
import komika from './fonts/komika_axis_reg.ttf'

class App extends React.Component {
  render () {
    return (
      <div>
        <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' />
        <Header />
        <Body />
      </div>
    )
  }
}

class Header extends React.Component {
  render () {
    return (
      <div>
        <div className='header'>
          <span>
            <a className='header-button' href='main.html'> Test 1 </a>
            <a className='header-button' href='main.html'> Test 2 </a>
            <a className='header-button' href='main.html'> Test 3 </a>
            <a className='header-button' href='main.html'> Test 4 </a>
          </span>
        </div>
      </div>
    )
  }
}

class Body extends React.Component {
  render () {
    return (
      <div>
        <div className='showcase'>
          <img className='showcase-bg1' src={require('./images/showcase_bg_1.png')} />
          <p className='showcase-title'> LCC NETWORK </p>
        </div>

        <div className='info'>
          <p> asdasdasd </p>
        </div>
      </div>
    )
  }
}

class Footer extends React.Component {
  render () {
    return (
      <div>

      </div>
    )
  }
}

render((
  <Router history={browserHistory} >
<<<<<<< master
    <Route path='/main.html' component={App} />
=======
  </Router>), document.getElementById('app'))
