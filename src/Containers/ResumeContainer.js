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
                        <h1 className='title1'>
                            RELEVANT WORK EXPERIANCE:
                        </h1>
                        <div className='jobs'>
                            <Jobs  jobTitle='Web Developer' yearDate='2017-PRESENT' jobDescription='Freelance Web Developer who helps clients move their name into the digital age.' />
                        </div>
                        <div className='jobs'>
                            <Jobs companyName='Solution Reach | ' jobTitle=' Level 3 Tech' yearDate='2016-PRESENT' jobDescription='Technical Rep who helped manage and maintain clients software and databses.'/>
                        </div>
                        <div className='jobs'>
                            <Jobs companyName='Nauman Designs | ' jobTitle='Graphic Designer' yearDate='2014-2016' jobDescription=' Designed Business Cards, Banners, and Web Ads using Adobe Illustrator and Photoshop.'/>
                        </div>
                        <h1 className='title1'>
                            Education:
                        </h1>
                    </div>
                </div>    
                </div>
            </div>
        )
    }
}

export default ResumeContainer;