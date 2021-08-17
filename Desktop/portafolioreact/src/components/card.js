import React from 'react';
import Fb from './images/fb.png'
import Lin from './images/lin.png'
import Itgm from './images/itgm.png'
import Gh from './images/gh.png'
import './card.css'
export default function Card(){
    return(
        <div className='social'>
            <div>
                <a classname='fb' href='https://www.facebook.com/juan.mojica.58152559'><img src={Fb}/><br/></a>
                <a classname='fb' href='https://www.linkedin.com/in/juan-mojica-b25a461ba/'><img src={Lin}/><br/></a>
                <a classname='fb' href='https://instagram.com/juanmojica17'><img src={Itgm}/><br/></a>
                <a classname='fb' href='https://github.com/juanmojica17'><img src={Gh}/><br/></a>
            </div>
            
            </div>
    )
}