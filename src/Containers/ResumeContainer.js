import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ResumeContainer.css'
import '../styles/ResumeNav.css'
import Jobs from '../Components/Jobs'
import Education from '../Components/Education'

class ResumeContainer extends Component {
    state = {
        resumeNav: 'resumeNavHidden',
        resumeContent: 'resumeContentHidden',
    }

    componentWillMount() {
        setTimeout(
            () => {
                this.setState ({
                    resumeNav: 'resume-nav',
                    resumeContent: 'resume-content'
                })
            }, 500
        )
    }
    render() {
        return(
            <div className='resume-main'>
                <div>
                <div className='resume-background'>
                </div>
                <div className={this.state.resumeNav}>
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
                <div className={this.state.resumeContent}>
                    <div className='title-box'>
                        <h1 className='resume-title'>
                            RESUME
                        </h1>
                        <h1 className='title1'>
                            RELEVANT WORK EXPERIENCE:
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
                        <div className='education'>
                            <div className='school1'>
                                <Education schoolName='MATC' schoolYearDate='2014-2016' schoolDescription='Received a trade degree in digital arts'/>
                            </div>
                            <div className='school2'>
                                <Education schoolName='HelioTraining' schoolYearDate='2016-2017' schoolDescription='Studied in Web development. Mastering front end development.' />
                            </div>
                        </div>
                    </div>
                </div>    
                </div>
            </div>
        )
    }
}

export default ResumeContainer;