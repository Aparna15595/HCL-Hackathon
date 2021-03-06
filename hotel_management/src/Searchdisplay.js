import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './filter';
import './index.css';
import displayData from './Mock_data/Data.json';
import DataToDisplay from './DataToDisplay'

class Searchdisplay extends React.Component{
constructor(props){
    super(props);
    this.state = {
        value : {}
    };
}
filteredData(){
    displayData.Hotel_Details.map(data => {
        console.log(data);
    if(data.state == "Ongole"){
        console.log(data);
    } 
})    
}
render(){   
    return (
        <div id="search_display">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3">
                    <Filter/>
                    <div className="text-center">
                        
                    </div>
                    </div>
                    <div className="col-sm-9">
                    <div> 
            {this.filteredData}
           { displayData.Hotel_Details.map(data =>
        <DataToDisplay filteredData = {data}/>
           )}
        </div>
                    </div>
                </div>
            </div>
        </div>
    );      
}
}

export default Searchdisplay;
