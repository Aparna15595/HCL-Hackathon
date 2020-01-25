import React from 'react';


const DataToDisplay = (props) => {
    console.log(props);
        return(
            <div>
            <p>{props.name}</p>
            <p>{props.rating}</p>
            </div>
          );
}

export default DataToDisplay;
