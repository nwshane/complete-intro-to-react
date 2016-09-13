var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return(
      div(null,
        h1(null, "My new titleeeee!")
      )
    )
  }
})

var ce = React.createElement
var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = (
  div(null,
    ce(MyTitle, {title: 'Props are great!'}),
    MyTitleFactory(null),
    React.createElement(MyTitle, null)
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))

