const React = require('react')
const { object } = React.PropTypes

const Header = require('./Header')
const ShowCard = require('./ShowCard')

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermChange (searchTerm) {
    this.setState({ searchTerm })
  },
  propTypes: {
    route: object
  },
  render () {
    return (
      <div className='container'>
        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
          showSearch
        />
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
