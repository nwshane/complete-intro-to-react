var React = require('react')

var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      h1({style: {color: this.props.color}}, 'This title is: ' + this.props.color)
    )
  }
})

module.exports = MyTitle
