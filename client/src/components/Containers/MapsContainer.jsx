import React from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';

import styles from './MapsContainer.module.scss';
function MapsContainer(props) {
    if (props.coordinates.length === 0) {
        return <div></div>;
    } else {
        const coordinates = props.coordinates;
        const RecenterAutomatically = ({ coordinates }) => {
            const map = useMap();
            map.flyTo(coordinates, 14, {
                duration: 2,
            });
            return null;
        };
        return (
            <div className={styles.wrapper}>
                <MapContainer
                    className={styles.leafletContainer}
                    center={coordinates}
                    zoom={12}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={coordinates}> </Marker>
                    <RecenterAutomatically coordinates={coordinates} />
                </MapContainer>
            </div>
        );
    }
}

export default MapsContainer;
