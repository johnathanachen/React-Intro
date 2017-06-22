import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <img className='logo' src='../public/img/logo.png' />
        <input type='text' placeholder='Search movies' />
        <Link to='/search'>Browse All</Link>
      </div>
    )
  }
})

export default Landing

