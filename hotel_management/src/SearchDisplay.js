import React from 'react';
import displayData from './Mock_data/Data.json';
import DataToDisplay from './DataToDisplay'

class SearchDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : {}
        };
    }
    filteredData(){
       let filteredData= displayData.Hotel_Details.map(data => {
           console.log(data);
        if(data.state == "Ongole"){
            console.log(data);
       } 
    })    
    }
    render(){
       // console.log(displayData.Hotel_Details);
        return (
            <div> 
                {this.filteredData}
            <DataToDisplay filteredData = {this.state.value}/>
            </div>
        );
    }
}

export default SearchDisplay;
