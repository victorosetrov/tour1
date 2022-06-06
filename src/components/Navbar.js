import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
  return(
    <div>
      <nav>
        <Link to="/">Home</Link>
        <span> | &nbsp;</span>
        <Link to="/shopping_list">Shopping List</Link>
      </nav>
    </div>
  )
}

export default Navbar