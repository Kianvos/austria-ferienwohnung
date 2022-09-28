import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Carousel from 'react-bootstrap/Carousel';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';

import carousel_1 from '../img/summer-1.jpg'
import carousel_2 from '../img/summer-2.jpg'
import carousel_3 from '../img/winter-1.jpg'
import carousel_4 from '../img/winter-2.jpg'



const HomescreenCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carousel_1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carousel_2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carousel_3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carousel_4}
                    alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>
    )

}

const Homepage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const navigateToApartments = () => {
        navigate('apartments');
    }

    return (
        <div className="homepage">
            <HomescreenCarousel />
            <div className="carouselBottom">
                <Row>
                    <Col>
                        <button onClick={navigateToApartments} className="requestButton buttons">
                            {t('navbar.apartments')}
                        </button>
                    </Col>
                    <Col>
                        <button className="bookingButton buttons">
                            {t('homepage.booking')}
                        </button>
                    </Col>
                </Row>
            </div>
            <div className="included">
                <div className="includedWidth">
                    <Row>
                        <Col className="colItem">
                            <Col className="iconInclude"><i class="bi bi-wifi"></i></Col>
                            <Col>{t('homepage.included.wifi')}</Col>
                        </Col>
                        <Col>
                            <Col className="iconInclude"><i class="bi bi-p-square"></i></Col>
                            <Col>{t('homepage.included.parking_area')}</Col>
                        </Col>
                        <Col>
                            <Col className="iconInclude"><i class="bi bi-fan"></i></Col>
                            <Col>{t('homepage.included.airconditioning')}</Col>
                        </Col>
                        <Col>
                            <Col className="iconInclude"><i class="bi bi-lamp"></i></Col>
                            <Col>{t('homepage.included.furnished')}</Col>
                        </Col>
                        <Col>
                            <Col className="iconInclude"><i class="bi bi-egg"></i></Col>
                            <Col>{t('homepage.included.breakfast')}</Col>
                        </Col>
                    </Row >
                </div>
            </div>
            <div className="textDiv">
                <div className="textDivWidth">
                    <h1>{t("homepage.text.header", { "haus": "Haus der Fuchs" })}</h1>
                    <p className="textBody">{t("homepage.text.body")}</p>
                </div>
            </div>
            <div className="pros">
                <Row>
                    <Col sm={12} md={6}>
                        <h2>{t("homepage.pro.title")}</h2>
                        <ul>
                            <li className="textBody">{t("homepage.pro.1")}</li>
                            <li className="textBody">{t("homepage.pro.2")}</li>
                            <li className="textBody">{t("homepage.pro.3")}</li>
                            <li className="textBody">{t("homepage.pro.4")}</li>
                            <li className="textBody">{t("homepage.pro.5")}</li>
                        </ul>
                    </Col>
                    <Col sm={12} md={6}><iframe title="gmaps" width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=nl&amp;q=fiss+(Mijn%20bedrijfsnaam)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">gps watches</a></iframe></Col>
                </Row>
            </div>
        </div>
    );
};



export default Homepage;