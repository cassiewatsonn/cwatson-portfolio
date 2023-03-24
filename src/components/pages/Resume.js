import React, { useState } from 'react';

export default function Resume() {

    const [resume] = useState({
        url: 'https://docs.google.com/document/d/1Tqkl69M_glsLbqKlTQMoG_-GUc_El9F6GXdXksb7i50/edit?usp=sharing',
        frontEndProficiencies: [
            'HTML',
            'CSS',
            'JavaScript',
            'JQuery',
            'Bulma',
            'Responsive design',
            'React',
            'Bootstrap'

        ],
        backEndProficiencies: [
            'APIs',
            'Express.js',
            'Node.js',
            'MySQL, Sequelize',
            'MongoDB, Mongoose',
            'GraphQL'
        ],
        projectManagement: [
            'Agile',
            'Scrum',
            'Kanban'
        ], 

        communicationSkills: [
            'Verbal',
            'Written',
            'Interpersonal',
            'Conflict resolution',
            'Active listening'
        ]
    });

    function downloadResume() {
        window.open(resume.url);
    }

    return (
        <div>
            <h2 className='resume-title'>Resume</h2>
            <div className='resume-download'>
                <h5 className='instruct'>Click the download button below to download my resume!</h5>
                <div className="img-download"> 
                    <img width="50px" height="50px" alt='download' src={require('../../mediaimages/download_FILL0_wght400_GRAD0_opsz48.png')} onClick={downloadResume}/>
                </div>
            </div>
            <div>
                <h3 className='front-prof-title'>Front End Proficiencies</h3>
                <ul className='front-end'>
                    {resume.frontEndProficiencies.map((proficiency) => (
                        <li key={proficiency}>{proficiency}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='back-prof-title'>Back End Proficiencies</h3>
                <ul className='back-end'>
                    {resume.backEndProficiencies.map((proficiency) => (
                        <li key={proficiency}>{proficiency}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='p-manag-title'>Project Management</h3>
                <ul className='project-management'>
                    {resume.projectManagement.map((proficiency) => (
                        <li key={proficiency}>{proficiency}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='c-skills-title'>Communication Skills</h3>
                <ul className='c-skills'>
                    {resume.communicationSkills.map((proficiency) => (
                        <li key={proficiency}>{proficiency}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}