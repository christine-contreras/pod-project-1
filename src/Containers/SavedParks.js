import React, { Component } from 'react'
import ParksContainer from '../Components/ParksContainer'

export class SavedParks extends Component {
    render() {
        return (
            <div>
                <ParksContainer
                 page={this.props.location.pathname}
                 title={this.props.title}
                 parks={this.props.savedParks}
                 handleParks={this.props.handleParks}/>
            </div>
        )
    }
}

export default SavedParks
