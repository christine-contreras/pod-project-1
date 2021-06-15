import React, { Component } from 'react'

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
        return this.state.stateAbbreviations.map(state => <option>{state}</option>)
   
    }

    renderSubmit = (event) => {
        event.preventDefault();
        console.log('form submission working')
        this.props.fetchingParks(this.state.selectedState)
    }


    render() {
        return (
            <form onSubmit={this.renderSubmit}>
                <fieldset>
                    <label for="form-states">Select States</label>
                    <select id="form-states" name="selectedState" value={this.state.selectedState} onChange={this.onChange}> 
                    {this.renderOptions()}
                    </select>

                    <button type="submit" class="pure-button pure-button-primary block" id="form-submit">Find Parks</button>
                </fieldset>
            </form>
        )
    }
}

export default Form

