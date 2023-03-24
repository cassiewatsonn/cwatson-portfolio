
import React from 'react'; 
// import './App.css'; 
// import Projects from '../Projects.json';

export default function ProjectCard({
    project 
}){
    return(
        // <Projects>
        <div className="card portfolio-card" >
            <div className='card-background'>
                <div className="img-container"> 
                    <img className='current-image' width={project.width} height={project.height} alt={project.name} src={process.env.PUBLIC_URL+project.image}/>
                </div>
                <div className="content">
                    <ul> 
                        <div className='card-title'>
                            <a href={project.link} target="_blank" className="projectcard-title" > {project.name}</a>
                        </div>
                        <li>
                            <strong className="underline">Description:</strong> {project.description}
                        </li>
                        <li>
                            <strong className="underline">Used:</strong> {project.used}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        // </Projects>
    )
}

