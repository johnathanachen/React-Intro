import React from 'react'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        <header>
          <img className='logo-search' src='../public/img/logo.png' />
          <input type='text' placeholder='Search' />
        </header>
        <div>
          {preload.shows.map((show) => {
            return (
              <ShowCard key={show.imdbID} {...show} />
              )
          })}
        </div>
      </div>
    )
  }
})

export default Search
