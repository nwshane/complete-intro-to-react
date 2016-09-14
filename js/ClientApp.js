var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return(
      h1({style: {color: this.props.color}}, 'This title is: ' + this.props.color)
    )
  }
})

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

