import React, { Component } from 'react';
import { string } from 'prop-types';


class ProjectsSkeleton extends Component {
    static propTypes = {
        projectName: string.isRequired,
        info: string.isRequired,
    }

    render() {
        return(
            <div>
                <h1>
                    {this.props.projectName}
                </h1>
                <p>
                    {this.props.info}
                </p>
            </div>
        )
    }
}

export default ProjectsSkeleton;