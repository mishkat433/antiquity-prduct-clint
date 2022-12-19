import React, { useEffect, useState } from 'react';
import "./Location.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const Location = () => {
    const [location, setLocation] = useState([])

    useEffect(() => {
        fetch('https://geolocation-db.com/json/a5f3c240-7310-11ed-8abc-5520d31fdee7')
            .then(res => res.json())
            .then(data => {
                setLocation(data)
            })
    }, [])

    if (location.length === 0) {
        return <p className='loading'>Loading...</p>
    }

    return (
        <section className='mt full-location'>
            <h1><FaMapMarkerAlt /> My Location : <span className='location'>{location.state}, {location.country_name}</span></h1>
        </section>
    );
};

export default Location;