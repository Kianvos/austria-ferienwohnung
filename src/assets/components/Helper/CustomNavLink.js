import React, {useState} from 'react';
import { Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function CustomNavLink({ to, children }) {
    const location = useLocation();

    const baseUrl = process.env.PUBLIC_URL;

    const absoluteTo = baseUrl + to;

    return (
        <Nav.Link className={"underline" + (to === absoluteTo ? " active" : "")}
                  href={absoluteTo}>
            {children}
        </Nav.Link>
    );
}

export default CustomNavLink;