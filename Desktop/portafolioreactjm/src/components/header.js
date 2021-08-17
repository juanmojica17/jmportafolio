import React from 'react'
import Menu from './menu'
import './header.css'
import logo from './images/logo.png'

function Header(){
return(
    <header className="org">
        <a className="logo" href="#"> JUAN MOJICA
            {/* <img className="logo" src= {logo}/> */}
            </a>
        <Menu/>
    </header>

)}











export default Header