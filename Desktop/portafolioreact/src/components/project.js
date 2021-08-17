import React from 'react';
import Weather from './images/weather.png'
import './project.css'


export default function Project({projectname, image, link}){
    return(
            <div className="project">
            <div >
            <h1 className="titleproject">{projectname}</h1>
            </div>
            <div >
            <a href={link}><img className="imgproject" src={image}/></a>
            </div>
            </div>  
       
    )
}