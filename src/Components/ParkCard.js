import React, { Component } from 'react'
import '../css/ParkCard.css'

export class ParkCard extends Component {
    render() {

        const cardStyle = {
            background: `url('https://www.nps.gov/common/uploads/structured_data/2514A14F-D5E3-BB31-4A0C4175BF61216A.jpg') center`
        }
        return (
            <div className="park-card">
                <div className="card-image" style={cardStyle}></div>
                <div className="park-card-info">
                    <h3 className="h4 color-4">Park Name</h3>
                    <p className="color-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The is that...</p>
                    <button type="submit" className="pure-button pure-button-primary">View Park</button>
                </div>
            </div>
        )
    }
}

export default ParkCard
