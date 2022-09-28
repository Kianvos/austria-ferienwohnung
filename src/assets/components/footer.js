import React from "react";
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { useTranslation } from "react-i18next";


const Footer = () => {
    const { t } = useTranslation();


    return (<Row className="footerDiv">
        <Col className="footerCol" md={4} sm={12}>
            <Col><h4>{t('footer.address')}</h4></Col>
            <Col className="mt-4"><p className="textFooter">Haus der Fuchs<br />Ladiser Landesstraße 5<br />6533 Fiss<br />Tirol, {t('footer.austria')}</p></Col>
        </Col>
        <Col className="footerCol" md={4} sm={12}>
            <Col><h4>{t('footer.contact')}</h4></Col>
            <Col className="mt-4">
                <p className="textFooter"><i class="bi bi-envelope"></i><a className="aRemoveStyle" href="mailto:kian@haus-fuchs.nl"> kian@haus-fuchs.nl</a><br />
                    <i class="bi bi-telephone"></i><a className="aRemoveStyle" href="tel:+316-37335400"> +31 6 37 33 54 00</a><br />
                    <i class="bi bi-facebook"></i> Haus Fuchs Fiss</p>
            </Col>
        </Col>
        <Col className="footerCol" md={4} sm={12}>
            <Col><h4>{t('footer.information.title')}</h4></Col>
            <Col className="mt-4">
                <p className="textFooter"><a className="aRemoveStyle" rel="noreferrer" target="_blank" href="https://www.serfausfissladis.nl/sites/omni00.d8.webpactserver.nl/files/pistekaart/Pistekaart_Serfaus_Fiss_Ladis.jpg">{t('footer.information.ski_map')}</a><br />
                    <a className="aRemoveStyle" rel="noreferrer" target="_blank" href="https://www.serfaus-fiss-ladis.at/">Serfaus-Fiss-Ladis</a><br />
                    <a className="aRemoveStyle" rel="noreferrer" target="_blank" href="https://tirol.at/">Tirol</a></p>
            </Col>
        </Col>
    </Row>
    )
}

export default Footer;