import React, { Component } from 'react'
import '../css/Form.css'

export class Form extends Component {
    constructor() {
        super()
        this.state = {
            stateAbbreviations: [
                'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
                'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
                'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
                'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
                'VT','VI','VA','WA','WV','WI','WY'
               ],
               selectedState: ""
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    renderOptions = () => {
        return this.state.stateAbbreviations.map(state => <option key={state}>{state}</option>)
   
    }

    renderSubmit = (event) => {
        event.preventDefault();
        console.log('form submission working')
        this.props.fetchingParks(this.state.selectedState)
    }


    render() {
        return (
            <form className="hero-form" onSubmit={this.renderSubmit}>
                <fieldset>
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-3-5 select-container">
                        <label className="color-3" htmlFor="form-states">Select State</label>
                        <select className="pure-u-23-24" id="form-states" name="selectedState" value={this.state.selectedState} onChange={this.onChange}> 
                        {this.renderOptions()}
                        </select>
                    </div>

                    <div className="pure-u-1 pure-u-md-2-5">
                    <button type="submit" className="pure-button pure-button-primary" id="form-submit">Find Parks</button>
                    </div>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default Form

