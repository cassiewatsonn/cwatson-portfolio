
import React from 'react'; 
// import './App.css'; 
// import Projects from '../Projects.json';

export default function ProjectCard({
    project 
}){
    return(
        // <Projects>
        <div className="card portfolio-card" >
            <div className="img-container"> 
                <img width="300px" height="300px" alt={project.name} src={process.env.PUBLIC_URL+project.image}/>
            </div>
            <div className="content">
                <ul> 
                    <li>
                        <strong>Name:</strong> {project.name}
                    </li>
                    <li>
                        <a href={project.link} target="_blank" ><strong>Link: </strong></a>
                    </li>
                    <li>
                        <strong>Description</strong> {project.description}
                    </li>
                </ul>
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

