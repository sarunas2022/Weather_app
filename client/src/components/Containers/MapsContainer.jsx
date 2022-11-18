import React from 'react';

function MapsContainer(props) {
    const data = props.maps;
    console.log(data.latitude);
    return (
        <>
            <div>
                <iframe title='maps' src={``} frameborder='1'></iframe>
            </div>
        </>
    );
}

export default MapsContainer;
