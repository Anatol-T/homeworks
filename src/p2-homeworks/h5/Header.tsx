import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import stl from "./Header.module.css"

function Header() {
  return (
    <nav className={stl.navigation}>
      <div className={stl.navMenu}>
        <NavLink to={PATH.PRE_JUNIOR} className={''} activeClassName={stl.selected}>PreJunior &nbsp;</NavLink>
        <NavLink to={PATH.JUNIOR} className={''} activeClassName={stl.selected}>Junior&nbsp;</NavLink>
        <NavLink to={PATH.JUNIOR_PLUS} className={''} activeClassName={stl.selected}>Junior+&nbsp;</NavLink>
        <span>&nbsp; &gt;&nbsp; </span>
      </div>
    </nav>
  )
}

export default Header
