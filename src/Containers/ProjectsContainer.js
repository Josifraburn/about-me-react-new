import React, { Component } from 'react';
import ProjectsSkeleton from '../Components/ProjectsSkeleton'
import { Link } from 'react-router-dom';
import './ProjectsContainer.css'
import '../styles/here.css'
import '../styles/ProjectsAnimation.css'

class ProjectsContainer extends Component{
    state = {
        projectsNav: 'projectsNavHidden',
        projectsMain: 'projectsMainHidden'
    }

    componentWillMount() {
        setTimeout(
            () => {
                this.setState ({
                    projectsNav: 'projects-nav',
                    projectsMain: 'projects-main'
                })
            }, 500
        )
    }
    render() {
        return(
            <div>
                <div className={this.state.projectsNav}>
                    <Link to='/' className='projects-link'>
                        HOME
                    </Link>
                    <Link to='/bio' className='projects-link'>
                        BIO
                    </Link>
                    <Link to='/resume' className='projects-link'>
                        RESUME
                    </Link>
                </div>
                <div className={this.state.projectsMain}>
                    <div className='project1-container'>
                        <img src='OtherFiles/josifimage.jpg' className='project1-img'/>
                        <div className='project1-background'>
                        </div>
                        <div className='projects-content1'>
                            <ProjectsSkeleton projectName='Portfolio Site' info={<p> This is my personel site. And it is cool. Check it out <a href='https://josifraburn.github.io/' className='projects-here'> HERE. </a> </p>}  />
                        </div>
                    </div>
                    <div className='project2-container'>
                        <img src='OtherFiles/josifandeverrete.jpg' className='project2-img' />
                        <div className='project2-background'>
                        </div>
                        <div className='projects-content2'>
                            <ProjectsSkeleton projectName='About Me Using React' info= {<p> In about me I used the React. Check out the code <a href='https://github.com/Josifraburn/about-me-react-new' className='projects-here'> HERE. </a> </p>}  />
                        </div>
                    </div>
                </div>
                <div className='projects-container'>
                </div>
            </div>
        )
    }
}

export default ProjectsContainer;