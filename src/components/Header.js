import React from 'react';

export default function Header(props) {
    return (
        <div className='header-bg'>
            <h1 className="name-title">Cassie Watson</h1>
            {props.children}
        </div>
   )
}

