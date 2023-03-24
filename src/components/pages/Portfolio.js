import React from 'react';
import Projects from '../portfolioproject';
import ProjectCard from '../Project.js'

export default function Portfolio() {
    console.log(Projects);
    return (
        <div>
            <h2 className='portfolio-title'>Projects</h2>
            <div className="card-wrap">
                {
                    Projects.map(project => {
                        return (<ProjectCard project={project} />)
                    })
                }
            </div>
        </div>
    )
}