import React from 'react';

export default function Header(props) {
    return (
        <div className='header-bg'>
            <div className="name-title">
                <h1>Cassandra Watson</h1>
            </div>
                 {props.children}
        </div>
   )
}

