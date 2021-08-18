import React from 'react'
import './menu.css'

export default function Menu(){
    return(
       <nav className="navigation">
           <ul>
           <li><a href='#'>About</a></li>
           <li><a href='#projects'>Projects</a></li>
           <li><a href='#social'>Social & contact</a></li>
          
           </ul>
       </nav>
    )
}