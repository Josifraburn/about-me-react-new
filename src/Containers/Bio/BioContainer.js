import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BioContianer.css'

class BioContainer extends Component {
    render() {
        return(
            <div className='bio-container'>
                <div className='bio-background'>
                </div>
                <div className='bio-layout'>
                    <img src='OtherFiles/josifimage.jpg' className='bio-image' /> 
                    <div className='bio-left'>   
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
                        <div className='bio-main-stuff'>
                            <div className='name-content'>
                                <h1 className='bio-name'>
                                    Josif Raburn
                                </h1>
                                <p className='bio-content'>
                                Yo this is stuff about me so listen to it because I am cool guy!
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>   
            </div>    
        )
    }
}

export default BioContainer;