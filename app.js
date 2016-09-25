// tells node to run all required files through babel
// Note: this file is not run through babel, so it cannot use all
// ES2015 syntax
require('babel-register')

// Express is a node-based server
const express = require('express')

const React = require('react')

// Renders react components as a string
const ReactDOMServer = require('react-dom/server')

const ReactRouter = require('react-router')
const RouterContext = ReactRouter.RouterContext
const match = ReactRouter.match

const ReactRedux = require('react-redux')
const Provider = ReactRedux.Provider

// Must specify .jsx because node does not use webpack
const Store = require('./js/Store.jsx')
const store = Store.store

// Provides templating language used in index.html
const _ = require('lodash')

// Node package, stands for file system. Will be used to read index.html
// into memory
const fs = require('fs')

// The port we've chosen to run our app on
const port = 8080

const ClientApp = require('./js/ClientApp.jsx')
const Routes = ClientApp.Routes

// Read index.html into memory
const baseTemplate = fs.readFileSync('./index.html')

// Create a template function that returns a string based on index.html
const template = _.template(baseTemplate)

const app = express()

app.use('/public', express.static('./public'))

app.use((req, res) => {
  match(
    { routes: Routes(), location: req.url },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        const body = ReactDOMServer.renderToString(
          React.createElement(Provider, {store},
            React.createElement(RouterContext, renderProps)
          )
        )
        res.status(200).send(template({ body }))
      } else {
        res.status(404).send('Not found')
      }
    }
  )
})

console.log('listening on port ' + port)
app.listen(port)
