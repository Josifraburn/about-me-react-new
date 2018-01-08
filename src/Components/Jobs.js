import React, { Component } from 'react'
import { string } from 'prop-types'
import '../styles/jobs.css'

class Jobs extends Component {
    static propTypes = {
        companyName: string.isRequired,
        jobTitle: string.isRequired,
        yearDate: string.isRequired,
        jobDescription: string.isRequired,
    }

    render() {
        return(
            <div>
                <div className='job-header'>
                    <h2>
                        {this.props.companyName}
                        {this.props.jobTitle}
                    </h2>
                    <h3>
                        {this.props.yearDate}
                    </h3>
                </div>
                <div className='job-description'>
                    <p>
                        {this.props.jobDescription}
                    </p>
                </div>
            </div>
        )
    }
}


export default Jobs