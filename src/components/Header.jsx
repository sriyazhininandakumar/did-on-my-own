import React from 'react';
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <div>
    <ul>
        <li>
    <div>
      <Link to={"/"}>home</Link>
    </div>
    </li>
    <li>
    <div>
      <Link to={"/Cart"}>Cart</Link>
    </div>
    </li>
    </ul>
    </div>
  )
}

export default Header
