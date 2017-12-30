import React, { Component } from 'react';
import './HomeContainer.css'
import { Link } from 'react-router-dom';

class HomeContainer extends Component {
    render() {
        return(
            <div>
                <div className='home-main'>
                </div>
                    <div className='home-content'>
                        <Link to='/bio' className='link'>
                        BIO
                        </Link>
                        <Link to='/projects' className='link'>
                        PROJECTS
                        </Link>
                        <Link to='/resume' className='link'>
                        RESUME
                        </Link>
                    </div>
                    <video autoPlay muted loop id='myVideo'>
                        <source src='OtherFiles/myvid.mp4' />
                    </video>
            </div>
        )
    }
}

export default HomeContainer;

