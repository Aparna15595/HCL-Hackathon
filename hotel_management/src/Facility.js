import React from 'react';
import Checkbox from './Checkbox';

class Facility extends React.Component{
state = { checked: false }
handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })
render() {
    return (
    <ul>
        <li>
        <label>
        <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
        />
        <span>Cable/DTH</span>
        </label>
        </li>
        <li>
    <label>
        <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
        />
        <span>Restaurant On Premises</span>
        </label></li>
        <li>
    <label>
        <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
        />
        <span>Free Wifi</span>
        </label></li>
        <li>
    <label>
        <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
        />
        <span>Complimentary water</span>
        </label></li>
    </ul>    
    ) 
}   
}

export default Facility;