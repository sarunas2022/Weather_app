import React from 'react';

function MapsContainer(props) {
    if (props.forecast.length === 0) {
        return <div></div>;
    } else {
        const data = props.fdata;
        return (
            <div>
                <h1>salta</h1>
                {/* <p>{data.name}</p> */}
            </div>
        );
    }
}

export default MapsContainer;
