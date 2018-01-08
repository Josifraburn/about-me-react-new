import React, { Component } from 'react';
import { string } from 'prop-types';
import '../styles/Education.css';

class Education extends Component {
    static propTypes = {
        schoolName: string.isRequired,
        schoolYearDate: string.isRequired,
        schoolDescription: string.isRequired,
    }

    render() {
        return(
            <div>
                <div className='education-header'>
                    <h2 className='school-name'>
                        { this.props.schoolName }
                    </h2>
                    <h2 className='school-year-date'>
                        { this.props.schoolYearDate }
                    </h2>
                </div>
                <p className='school-description'>
                    { this.props.schoolDescription}
                </p>
            </div>
        )
    }
}
export default Education 