import React from 'react';
import Searchdisplay from '../Searchdisplay';
import '../index.css';

class SearchBar extends React.Component {
constructor(){
    super();
    this.state={
      value:''
    }
}

    handleChange(event){
        this.setState ({value : event.target.value})
    }
    render(){
return(
<div id="serach_bar">
<input type="text" placeholder="Search.." onChange={this.handleChange}/>
<button>Search</button>
<Searchdisplay value={this.state.value} />
    </div>
)
    }
}

export default SearchBar;