import React from 'react';
import Checkbox from './components/Checkbox';

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
        <span>1000 - 2500</span>
        </label>
        </li>
        <li>
    <label>
        <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
        />
        <span>2500 - 4000</span>
        </label></li>
        <li>
    <label>
        <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
        />
        <span>4000 - 5500</span>
        </label></li>
        <li>
    <label>
        <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
        />
        <span>5500 - More</span>
        </label></li>
    </ul>    
    ) 
}   
}

export default Facility;