const React = require('react')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { Provider } = require('react-redux')

const Layout = require('./Layout')
const Landing = require('./Landing')
const Search = require('./Search')
const Details = require('./Details')

const { store } = require('./Store')

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} />
            <Route path='/details/:id' component={Details} />
          </Route>
        </Router>
      </Provider>
    )
  }
})

module.exports = App
