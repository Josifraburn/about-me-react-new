import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BioContianer.css'

class BioContainer extends Component {
    render() {
        return(
            <div className='bio-main'>
                <div className='bio-nav'>
                    <Link to='/' className='bio-link'>
                        HOME
                    </Link>
                     
                    <Link to='/projects' className='bio-link'>
                        PROJECTS
                    </Link>
                    <Link to='/resume' className='bio-link'>
                        RESUME
                    </Link>
                </div>
                <h1 className='name'>
                    Josif Raburn
                </h1>
                <p className='bio-content'>
                    Yo this is stuff about me so listen to it because I am cool guy!
                </p>
            </div>
        )
    }
}

export default BioContainer;