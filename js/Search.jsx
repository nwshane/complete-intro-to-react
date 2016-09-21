const React = require('react')
const data = require('../public/data')

const ShowCard = require('./ShowCard')

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: 'this is my search term'
    }
  },
  handleSearchTermEvent (event) {
    this.setState({ searchTerm: event.target.value })
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>{this.state.searchTerm}</h1>
          <input value={this.state.searchTerm} className='search-input' type='text' placeholder='Search' onChange={this.handleSearchTermEvent} />
        </header>
        <div className='shows'>
          {
            data.shows.map((show) => (
              <ShowCard {...show} key={show.imdbID} />
            ))
          }
        </div>
      </div>
    )
  }
})

module.exports = Search
