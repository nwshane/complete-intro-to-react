const React = require('react')
const { string, object } = React.PropTypes
const { connector } = require('./Store')

const Header = require('./Header')
const ShowCard = require('./ShowCard')

const Search = React.createClass({
  propTypes: {
    searchTerm: string,
    route: object
  },
  render () {
    return (
      <div className='container'>
        <Header showSearch />
        <div className='shows'>
          {
            this.props.route.shows
              .filter((show) => {
                return `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.props.searchTerm.toUpperCase()) >= 0
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

module.exports = connector(Search)
