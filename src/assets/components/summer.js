import React from "react";

import { useTranslation } from "react-i18next";
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';

import summerBackground from '../img/summer_background.jpeg'
import summer_1 from '../img/summer_page_1.jpg'
import summer_2 from '../img/summer_page_2.jpg'
import summer_3 from '../img/summer_page_3.jpg'

const Summer = () => {
    const { t } = useTranslation();

    return (
        <div>
            <img
                className="d-block w-100"
                src={summerBackground}
                alt="Winger"
            />
            <div className="informationText">
                <h1 className="informationHeader">{t('summer.information.title')}</h1>
                <p className="informationBody">{t('summer.information.text')}</p>
            </div>
            <div className="imageInformation">
                <Row className="mt-5 mb-5 d-flex">
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 6, order: 1 }}>
                        <img
                            className="rounded d-block imageTest"
                            src={summer_1}
                            alt="Hiking"
                        />
                    </Col>
                    <Col xs={{ span: 12, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }}>
                        <div className="rounded rightInformation">
                            <div className="text">
                                <h1 className="informationHeader">{t('summer.hiking.title')}</h1>
                                <p className="fitParagraph">{t('summer.hiking.text_1')}</p>
                                <p className="fitParagraph">{t('summer.hiking.text_2')}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <Col xs={{ span: 12, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }}>
                        <div className="rounded rightInformation">
                            <div className="text">
                                <h1 className="informationHeader">{t('summer.mountainbike.title')}</h1>
                                <p className="fitParagraph">{t('summer.mountainbike.text_1')}</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
                        <img
                            className="rounded d-block imageTest"
                            src={summer_2}
                            alt="Mountain biking"
                        />
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 6, order: 1 }}>
                        <img
                            className="rounded d-block imageTest"
                            src={summer_3}
                            alt="Fun park"
                        />
                    </Col>
                    <Col xs={{ span: 12, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }}>
                        <div className="rounded rightInformation">
                            <div className="text">
                                <h1 className="informationHeader">{t('summer.funpark.title')}</h1>
                                <p className="fitParagraph">{t('summer.funpark.text_1')}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Summer