import React, { Component } from 'react';
import './HomeContainer.css'
import { Link } from 'react-router-dom';

class HomeContainer extends Component {
    render() {
        return(
            <div className='home-main'>
                <div className='home-content'>
                    <Link to='/bio'>
                       BIO
                    </Link>
                    <Link to='/projects'>
                       PROJECTS
                    </Link>
                    <Link to='/resume'>
                       RESUME
                    </Link>
                </div>
                {/* <video autoPlay muted loop id='myVideo'>
                    <source src='OtherFiles/myvid.mp4' />
                </video> */}
            </div>
        )
    }
}

export default HomeContainer;

