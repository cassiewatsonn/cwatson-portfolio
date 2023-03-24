
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
                    <img width="300px" height="300px" alt={project.name} src={process.env.PUBLIC_URL+project.image}/>
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
// export default function Project(props) {
//     return (
//         <div>
//             <h1>Projects</h1>
//             {props.children}
//         </div>

        // <Wrapper>
        //     {this.state.projects.map(projects =>
        //         <projectCard
        //             id={Projects.id}
        //             name={Projects.name}
        //             image={Projects.image}
        //             link={Projects.link}
        //             description={Projects.description}
        //         />
        //     )}
        // </Wrapper>
//     )
// }

