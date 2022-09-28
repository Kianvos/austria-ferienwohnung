import React from "react";

import winterBackground from '../img/winter_background.jpeg'
import winter_1 from '../img/winter_page_1.jpg'
import winter_2 from '../img/winter_page_2.jpg'
import winter_3 from '../img/winter_page_3.jpg'

import { useTranslation } from "react-i18next";
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';

const Winter = () => {
    const { t } = useTranslation();
    return (
        <div>
            <img
                className="d-block w-100"
                src={winterBackground}
                alt="Winter background"
            />
            <div className="informationText">
                <h1 className="informationHeader">{t("winter.information.title")}</h1>
                <p className="informationBody">{t("winter.information.text")}</p>
            </div>
            <div className="imageInformation">
                <Row className="mt-5 mb-5">
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 6, order: 1 }}>
                        <img
                            className="rounded d-block imageTest"
                            src={winter_1}
                            alt="Family skiing"
                        />
                    </Col>
                    <Col xs={{ span: 12, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }}>
                        <div className="rounded rightInformation">
                            <div className="text">
                                <h1 className="informationHeader">{t('winter.ski.title')}</h1>
                                <p className="fitParagraph">{t('winter.ski.text_1')}</p>
                                <p className="fitParagraph">{t('winter.ski.text_2')}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <Col xs={{ span: 12, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }}>
                        <div className="rounded rightInformation">
                            <div className="text">
                                <h1 className="informationHeader">{t('winter.cross_country_skiing.title')}</h1>
                                <p className="fitParagraph">{t('winter.cross_country_skiing.text_1')}</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }}>
                        <img
                            className="rounded d-block imageTest"
                            src={winter_2}
                            alt="Langlaufen"
                        />
                    </Col>
                </Row>
                <Row className="mt-5 mb-5">
                    <Col xs={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 6, order: 1 }}>
                        <img
                            className="rounded d-block imageTest"
                            src={winter_3}
                            alt="Rodelen"
                        />
                    </Col>
                    <Col xs={{ span: 12, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }}>
                        <div className="rounded rightInformation">
                            <div className="text">
                                <h1 className="informationHeader">{t('winter.sledding.title')}</h1>
                                <p className="fitParagraph">{t('winter.sledding.text_1')}</p>
                                <p className="fitParagraph">{t('winter.sledding.text_2')}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div >
    )
}

export default Winter