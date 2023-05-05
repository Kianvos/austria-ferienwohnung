import React from "react";
import { useParams } from 'react-router-dom';

const Apartment = () => {
    const params = useParams();


    // const getData = () => {
    // }

    return (
        <div>
            <h1>{params.roomId}</h1>
            <h2>Test</h2>
        </div>
    )
}

export default Apartment