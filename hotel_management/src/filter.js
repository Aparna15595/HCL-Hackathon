import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SliderPage from './Pricerange';
import Rating from './Rating';
import Roomtype from './Roomtype';
import Facility from './Facility';

class Filter extends React.Component{
render(){
return (
<div className="filter">
<h2>Filter</h2>
<div className="filter_div price_filter">
    <label>Price</label>
    <SliderPage/>
    </div>
    <div className="filter_div rating_filter">
        <label>Rating</label>
    <Rating/>
</div>
<div className="filter_div room_type">
<label>Room Type</label>
<Roomtype/>
</div>
<div className="filter_div facility">
<label>Amenities</label>
<Facility/>
</div>
</div>
);
}
}
export default Filter;
