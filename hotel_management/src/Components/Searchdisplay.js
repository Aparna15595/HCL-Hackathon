import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './filter';
import './index.css';

class Searchdisplay extends React.Component{
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

                        </div>
                    </div>
                </div>
            </div>
        );      
    }
}

export default Searchdisplay;
