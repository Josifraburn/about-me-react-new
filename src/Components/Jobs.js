import React, { Component } from 'react'
import { string } from 'prop-types'
import '../styles/jobs.css'

class Jobs extends Component {
    static propTypes = {
        jobTitle: string.isRequired,
        yearDate: string.isRequired,
        jobDescription: string.isRequired,
    }

    render() {
        return(
            <div>
                <div className='job-header'>
                    <h2>
                        {this.props.jobTitle}
                    </h2>
                    <h3>
                        {this.props.yearDate}
                    </h3>
                </div>
                <p>
                    {this.props.jobDescription}
                </p>
            </div>
        )
    }
}


export default Jobs