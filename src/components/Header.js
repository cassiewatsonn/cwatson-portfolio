import React from 'react';

export default function Header(props) {
    return (
        <div className='header-bg'>
            <h1>Cassie Watson</h1>
            {props.children}
        </div>
   )
}

