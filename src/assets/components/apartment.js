import React from "react";
import { useParams } from 'react-router-dom';

const Apartment = () => {
    const params = useParams();


    // const getData = () => {
    // }

    return (
        <div>
            <h1>{params.roomId}</h1>
            <br/>
            <br/>
            <h2>Nog niet beschikbaar!</h2>
        </div>
    )
}

export default Apartment