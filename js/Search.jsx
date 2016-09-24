const React = require('react')
const { object } = React.PropTypes

const ShowCard = require('./ShowCard')

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermEvent (event) {
    this.setState({ searchTerm: event.target.value })
  },
  propTypes: {
    route: object
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>svideo</h1>
          <input value={this.state.searchTerm} className='search-input' type='text' placeholder='Search' onChange={this.handleSearchTermEvent} />
        </header>
        <div className='shows'>
          {
            this.props.route.shows
              .filter((show) => {
                return `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
              })
              .map((show) => (
                <ShowCard {...show} key={show.imdbID} />
              ))
          }
        </div>
      </div>
    )
  }
})

module.exports = Search
