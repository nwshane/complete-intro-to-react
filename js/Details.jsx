const React = require('react')

class Details extends React.Component {
  render () {
    return (
      <div className='container'>
        <pre style={{textAlign: 'left'}}><code>
          {JSON.stringify(this.props, null, 4)}
        </code></pre>
      </div>
    )
  }
}

module.exports = Details
