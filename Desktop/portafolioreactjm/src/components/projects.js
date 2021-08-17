import React from 'react';
import Project from './project.js'
import './projects.css'
import Crud from'./images/crud.png'
import Trivia from'./images/trivia.png'
import Weather from'./images/weather.png'
import Quotes from'./images/quotes.png'
const projectList =[
    {
        projectname: 'QuotesApp',
        id:1,
        image:{Quotes},
        link: 'https://quotesjuanmojica.vercel.app/'
    },
    {
        projectname: 'WeatherApp',
        id:2,
        image:{Weather},
        link: 'https://mojicaweather.vercel.app/'
    },
    {
        projectname: 'TriviaApp',
        id:3,
        image:{Trivia},
        link:'https://triviajuanmojica.vercel.app/'
    },
    {
        projectname: 'CrudApp',
        id:4,
        image:{Crud}
    }
    
]
export default function Proyects(){
    return(
        
        <div className='marg'>
           
        <div id='projects' className="projects1">PROJECTS</div>
        <div className="projects">
        <Project projectname= 'QuotesApp' 
         id='1'
        image={Quotes}
        link='https://quotesjuanmojica.vercel.app/'/> 
        <Project projectname= 'WeatherApp' 
         id='2'
        image={Weather}
        link='https://mojicaweather.vercel.app/'/> 
        </div>
        <div className="projects">
        <Project projectname= 'TriviaApp' 
         id='3'
        image={Trivia} 
        link='https://triviajuanmojica.vercel.app/'/> 
        <Project projectname= 'CrudApp' 
         id='4'
        image={Crud}/> 
        </div>
        </div>
    )
}