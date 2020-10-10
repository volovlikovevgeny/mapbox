import React, { useState } from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import * as parkData from '../../data.json';
import './mapbox.styles.css';



import ReactHlsPlayer from 'react-hls-player';



const MapBox = (props) => {

    console.log(props);
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 45.4211,
        longitude: -75.6903,
        zoom: 10
    })






    const [selectPark, setSelectedPark] = useState(null)

    let token = 'pk.eyJ1IjoiZXZnZW55cXdlIiwiYSI6ImNrZzByOXN3ZTB5aTIycnFmeHFxMHplMHgifQ.uO59eh5EzNq3QgdSggQ3YA'

    return (
        <div className='mapbox-inner'>
            <ReactMapGl
                {...viewport}
                mapboxApiAccessToken={token}
                mapStyle='mapbox://styles/evgenyqwe/ckg0sbl952cri1alpf9g9hq54'
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}>
                {
                    parkData.features.map((park) => (
                        <Marker
                            key={park.properties.PARK_ID}
                            latitude={park.geometry.coordinates[1]}
                            longitude={park.geometry.coordinates[0]}
                        >
                            <button
                                className='marker-btn'
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedPark(park)
                                }} >
                                <img src='/skateboarding.svg' alt="Skate Park Icon" />
                            </button>
                        </Marker>
                    ))
                }

                {selectPark ? (
                    <Popup
                        latitude={selectPark.geometry.coordinates[1]}
                        longitude={selectPark.geometry.coordinates[0]}
                        onClose={() => {
                            setSelectedPark(null)
                        }}
                    >
                        <div style={{ width: '300px', height: '300px', textAlign: 'center' }}>
                            <h2 style={{ textAlign: 'center' }}>{selectPark.properties.NAME}</h2>
                            <p >{selectPark.properties.DESCRIPTIO}</p>

                            <div>
                                {<ReactHlsPlayer
                                    url={selectPark.properties.CAMERA_URL}
                                    autoplay={true}
                                    controls={false}
                                    width={300}
                                    height={130}
                                />}
                            </div>
                        </div>
                    </Popup>
                ) : null}
            </ReactMapGl>
        </div >
    )
}

export default MapBox;

