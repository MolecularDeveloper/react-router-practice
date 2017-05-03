import React from 'react'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
      	<h6>react router </h6>
      	<ul role="nav">
      	  <li><NavLink to="/about/" activeClassName="active"> about</NavLink></li>
      	  <li><NavLink to="/repos/" activeClassName="active"> repos</NavLink></li>
      	 </ul>
      	 { }
      	 {this.props.children || <Home />}
      </div>
    )
  }
})
