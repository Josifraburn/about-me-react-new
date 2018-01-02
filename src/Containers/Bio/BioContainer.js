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
                                <h2 className='bio-content'>
                                I AM A 20 SOMETHING WEB DEVELOPER/DESIGNER<br />
                                I HAVE A BEAUTIFUL WIFE AND 2 COOL DOGS<br />
                                I LOVE VIDEO GAMES, MOVIES, AND LONG WALKS ON THE BEACH<br />

                                </h2>
                            </div>
                        </div>
                    </div> 
                </div>   
            </div>    
        )
    }
}

export default BioContainer;