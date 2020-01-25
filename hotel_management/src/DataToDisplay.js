import React from 'react';


const DataToDisplay = (props) => {
    console.log(props);
        return(
            <div>
            <div>{props.filteredData.name}</div>
            <div>{props.filteredData.rating}</div>
            <div>{props.filteredData.address}</div>
            <div>{props.filteredData.price}</div>
            <div>{props.filteredData.state}</div>
            <button>View Details</button>&nbsp;
            <button onclick = {this}>Room Availability</button>
            {/* <table border="10">
                <tr>
                    <td>AC Rooms</td>
                    <td>Non-AC Rooms</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>20</td>
                </tr>
            </table> */}
            <hr></hr>
            </div>
          );
}

export default DataToDisplay;
