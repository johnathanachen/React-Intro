import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
const { string } = React.PropTypes

const Landing = React.createClass({
  propTypes: {
    searchTerm: string
  },
  render () {
    return (
      <div className='landing'>
        <img className='logo' src='../public/img/logo.png' />
        <input value={this.props.searchTerm} type='text' placeholder='Search movies' />
        <Link to='/search'>Browse All</Link>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Landing)
