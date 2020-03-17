import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const head = () => {
    return (

  <nav className="z-depth-2 lighten-4">
    <div className="nav-wrapper container">
        <Link to='/' className ="brand-logo">Title</Link>
      <ul id="nav-mobile" className="right hide-on-sm-and-down">
          <li className="logged-in">
            <NavLink to='/Editor' className="white-text" id="MyQuizes">My Quizes</NavLink>
          </li>
          <li className="logged-in">
            <a href="/" className="white-text" id="logout">Logout</a>
          </li>
          <li className="logged-out">
            <a href="/login" className="white-text modal-trigger" data-target="modal-login">Login</a>
          </li>
          <li className="logged-out">
            <a href="/signup" className="white-text modal-trigger" data-target="modal-signup">Sign up</a>
          </li>
      </ul>
    </div>
  </nav>
    )

}
export default head
