import React from 'react';

// Import leaflet components
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// Import bootstrap components
import { Col, Row  } from 'react-bootstrap';

const AboutMe = () => {
    const locationData = {
        'sevilla': {
            'lat': 37.3826,
            'lng': -5.99629
        },
        'amsterdam': {
            'lat': 52.3738,
            'lng': 4.89093
        },
        'lyon': {
            'lat': 45.74846,
            'lng': 4.84671
        }
    }

    return (
        <Row id="about-me" className="card card-body bg-light">
            <Col md={6} id="about-me-info">
                <h1>About Me</h1>
                <p>Computer engineer and full stack developer based in Sevilla and Amsterdam.</p>
                <p>With experience in teamwork, always willing to learn new things and delighted at facing new challenges.</p>
                <p>No matter the time, I will always be dealing with a project.</p>
                <p>Looking for a Full Stack junior developer job.</p>
            </Col>
            <Col md={6} id="about-me-map">
                <MapContainer center={[locationData.lyon.lat, locationData.lyon.lng]} zoom={4} scrollWheelZoom={true} id="mapContainer" className="rounded-circle">
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[locationData.sevilla.lat, locationData.sevilla.lng]}>
                        <Popup>
                            <strong>Education: Universidad de Sevilla</strong> <br /> Computer Engineering Degree
                            <br />
                            <br />
                            <strong>Education: Universidad Pablo de Olavide</strong> <br /> Master in Computer Engineering
                            <br />
                            <br />
                            <strong>Experience: TTI Norte</strong> <br /> Internet of Things Developer
                        </Popup>
                    </Marker>
                    <Marker position={[locationData.amsterdam.lat, locationData.amsterdam.lng]}>
                        <Popup>
                            <strong>Education: Hogeschool van Amsterdam</strong> <br /> Mobile Development Minor
                            <br />
                            <br />
                            <strong>Experience: TamTam (part of dept)</strong> <br /> iOS App Developer
                        </Popup>
                    </Marker>
                </MapContainer>
            </Col>
        </Row> 
    );
}

export default AboutMe;
