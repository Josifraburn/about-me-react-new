import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ResumeContainer.css'
import '../styles/ResumeNav.css'
import Jobs from '../Components/Jobs'

class ResumeContainer extends Component {
    render() {
        return(
            <div className='resume-main'>
                <div>
                <div className='resume-background'>
                </div>
                <div className='resume-nav'>
                    <Link to='/' className='resume-link'>
                        HOME
                    </Link>
                    <Link to='/bio' className='resume-link'>
                        BIO
                    </Link>
                    <Link to='/projects' className='resume-link'>
                        PROJECTS
                    </Link>
                </div>
                <div className='resume-content'>
                    <div className='title-box'>
                    <h1 className='resume-title'>
                        RESUME
                    </h1>
                    <Jobs jobTitle='Web Developer' yearDate='2017-PRESENT' />
                    </div>
                </div>    
                </div>
            </div>
        )
    }
}

export default ResumeContainer;