var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var div = React.DOM.div
var ce = React.createElement
var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = (
  div(null,
    ce(MyTitle, {color: 'red'}),
    MyTitleFactory({color: '#654321'}),
    React.createElement(MyTitle, {color: 'peru'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
