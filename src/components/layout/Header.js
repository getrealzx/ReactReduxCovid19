import React from 'react'
import {Link} from 'react-router-dom'

const Header = (props) => {
  return (
    <>
        Header<br/>
        <Link to="/">Home</Link>
        <Link to="/container" >Container</Link>
    </>
  )
}

export default Header
