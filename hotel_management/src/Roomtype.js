import React from 'react';
import Checkbox from './components/Checkbox';

class Roomtype extends React.Component{
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
        <span>AC</span>
        </label>
        </li>
        <li>
    <label>
        <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
        />
        <span>Non AC</span>
        </label></li>
    </ul>    
    ) 
}   
}

export default Roomtype;