const React = require('react')
const ReactDOM = require('react-dom')
const { Router, Route, hashHistory } = require('react-router')

const Landing = require('./Landing')
const Search = require('./Search')

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/search' component={Search} />
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
