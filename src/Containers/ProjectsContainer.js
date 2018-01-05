import React, { Component } from 'react';
import ProjectsSkeleton from '../Components/ProjectsSkeleton'
import './ProjectsContainer.css'

class ProjectsContainer extends Component{
    render() {
        return(
            <div className='projects-main'>
                <div className='project1-container'>
                    <div className='project1'>
                        <ProjectsSkeleton projectName='Portfolio Site' info='This is info about my project'  />
                    </div>
                </div>
                <div className='project2-container'>
                    <div className='project2'>
                        <ProjectsSkeleton projectName='About Me Using React' info='This is other info about my project' />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectsContainer;