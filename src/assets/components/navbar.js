// Bootstrapp imports
import {useState, useEffect} from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import ReactCountryFlag from 'react-country-flag';
import {useTranslation} from 'react-i18next';
import {useLocation} from 'react-router-dom';
import i18next from 'i18next';

import logo from '../img/test.png'
import CustomNavLink from "./Helper/CustomNavLink";

function NavigationBar() {
    const location = useLocation();
    const [url, setUrl] = useState(null);
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    const languages = [
        {
            code: 'en',
            name: 'English',
            country_code: 'gb',
        },
        {
            code: 'nl',
            name: 'Nederlands',
            country_code: 'nl'
        },
        {
            code: 'de',
            name: 'Deutsch',
            country_code: 'de',
        },
    ]

    const {t} = useTranslation('common')
    const baseUrl = '/';
    // const baseUrl = process.env.PUBLIC_URL;

    return (
        <Navbar expand="md" className="shadow p-3 bg-white">
            <Container>
                <div></div>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Brand className="navbar-brand" href={`${baseUrl}/`}>
                    <div className='logoNavbar'>
                        <img className='logo' src={logo} alt="logo"/>
                    </div>
                </Navbar.Brand>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto rightNav">
                        <Nav.Item className='navItemRight'>
                            <CustomNavLink to="/info">
                                {t('navbar.about-me')}
                            </CustomNavLink>
                        </Nav.Item>
                        <Nav.Item className='navItemRight'>
                            <CustomNavLink to="/apartments">
                                {t('navbar.apartments')}
                            </CustomNavLink>
                        </Nav.Item>
                        <Nav.Item className='navItemRight'>
                            <CustomNavLink to="/winter">
                                {t('navbar.winter')}
                            </CustomNavLink>
                        </Nav.Item>
                        <Nav.Item className='navItemRight'>
                            <CustomNavLink to="/summer">
                                {t('navbar.summer')}
                            </CustomNavLink>
                        </Nav.Item>
                        <Nav.Item className='flag'>
                            <NavDropdown
                                id="dropdown-menu-align-end"
                                align="end"
                                title={<ReactCountryFlag svg style={{
                                    fontSize: '2em',
                                }} countryCode={t('navbar.logo')}/>}
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {languages.map(({code, name, country_code}) => (
                                    <NavDropdown.Item key={country_code}>
                                        <button className='dropdown-item' onClick={() => i18next.changeLanguage(code)}>
                                            <ReactCountryFlag svg style={{
                                                fontSize: '1.5em',
                                                marginRight: '8px'
                                            }} countryCode={country_code}/>
                                            {name}
                                        </button>
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        </Nav.Item>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;