// import React from 'react';


// export default function Footer() {

//     return (
// <footer> 
// {/* links to github, linkedin,  stack overflow */}
// </footer>
    
//         );

// }

import React from "react";

export default function Footer() {
   const year = new Date().getFullYear();
    return(
        <footer className="footer">
            <div>
                <div className="footer-title">
                    <h3>Connect with me!</h3>
                </div>
                
                <div className="footer-logos">
                    {/* <div> */}
                        <a href="https://github.com/cassiewatsonn" target="_blank"><img width="50px" height="50px" src={require('../mediaimages/github-mark-white.png')} alt="Github"/></a>
                    {/* </div>
                    <div> */}
                        <a href="https://www.linkedin.com/in/cassandrawatsonn/" target="_blank"><img width="50px" height="50px" src={require('../mediaimages/linkedin-3-xxl.png')} alt="LinkedIn"/></a>
                    {/* </div>
                    <div> */}
                        <a href="https://twitter.com/cassiewatsonnnn" target="_blank"><img width="50px" height="50px" src={require('../mediaimages/Twitter social icons - rounded square - white.png')} alt="Twitter"/></a>
                    {/* </div>
                    <div> */}
                        <a href="https://www.instagram.com/cassiewatsonn/" target="_blank"><img width="50px" height="50px" src={require('../mediaimages/Instagram_Glyph_White.png')} alt="Instagram"/></a>
                    {/* </div> */}
                
                </div>
                <div className="copyright">
                    {`Copyright @ ${year} Cassandra Watson`}
                </div>
            </div>
        </footer>
    )
   
};