import React from 'react';
import FotoProfile from './images/fotoprofile.png'
import './about.css'

export default function About(){
return(
<>
<div id= 'about' className="about">
<div className="profile" >
<img className="fotoprofile" src="FotoProfile" src={FotoProfile}/>
</div>
<div className="profile">
    <p><h3>&lt;Hi!, Im Juan Mojica/&gt;</h3>
    <br/>
    I am a Colombian student of web development and programming, based in the city of Miami
    in the state of Florida interested in the contribution of the advancement of technologies,
    and the implementation of my knowledge within the business and design fields.
    </p>
</div>
</div>


</>
)}




