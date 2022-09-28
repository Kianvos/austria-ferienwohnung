import React from "react";
import { useState, Button } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'

import { useTranslation } from "react-i18next";
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';

import houseBackground from '../img/house_background.jpg'
import { Data } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";

import room_1 from '../img/room-1/img_1.jpg'
import room_2 from '../img/room-1/img_2.jpg'
import room_3 from '../img/room-1/img_3.jpg'

const CustomCheckInDate = (props) => {
    return (
        <div className="wrapper">
            <i onClick={props.onClick} aria-hidden="true" className="bi bi-calendar3"></i>
            <input onClick={props.onClick} className="dateInput" value={props.value} readOnly={true} placeholder={"Inchecken"} type="text" />
        </div>
    )
}

const CustomCheckOutDate = (props) => {
    return (
        <div className="wrapper">
            <i onClick={props.onClick} aria-hidden="true" className="bi bi-calendar3"></i>
            <input onClick={props.onClick} className="dateInput" value={props.value} readOnly={true} placeholder={"Uitchecken"} type="text" />
        </div>
    )
}

const Apartments = () => {
    const { t } = useTranslation();

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    var date = new Date();

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const [minimumDate, setMinimumDate] = useState(tomorrow);

    const style = {
        control: base => ({
            ...base,
            border: '0.7px solid #75665a',
            borderRadius: '5px',
            // This line disable the blue border
            boxShadow: 'none'
        })
    };

    const optionsAdult = [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' }
    ]
    const optionsChild = [
        { value: 0, label: '0' },
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' }
    ]
    var age = []
    for (var i = 0; i < 18; i++) {

        age.push({ value: i, label: '' + i })
    }
    const [checkOutDisabled, setCheckOutDisabled] = useState(true)

    const [adults, setAdults] = useState(1);
    const [childs, setChilds] = useState(0);
    const [ages, setAges] = useState([]);

    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(true)

    const howManyChild = (count) => {
        setChilds(count)
        let newArr = [...ages];
        console.log(newArr.length, count)
        if (count === 0 && newArr.length > 0) {
            newArr.length = 0
        } else if (count === 1 && newArr.length > 1) {
            newArr.length = 1
        }
        setAges(newArr)
    }

    const editAge = (child, age) => {
        let newArr = [...ages];
        newArr[child] = age
        setAges(newArr)
    }

    const checkData = () => {
        setError(false)
        setErrorMessage('')
        if (childs !== ages.length) {
            setError(true)
            setErrorMessage("Nog niet alle leeftijden van de kinderen zijn ingevuld.")
        }
        if (startDate === undefined) {
            setError(true)
            setErrorMessage("U heeft nog geen aankomstdatum opgegeven.")
        }
        if (endDate === undefined) {
            setError(true)
            setErrorMessage("U heeft nog geen vertrekdatum opgegeven.")
        }
        if (adults + childs > 4) {
            setError(true)
            setErrorMessage("U heeft teveel personen. Er is plek voor 4 personen.")
        }
        console.log(adults, childs, ages, "Dagen:", (endDate - startDate) / 24 / 60 / 60 / 1000)
    }

    const navigate = useNavigate();
    const handleNavigation = (roomId) => {
        navigate("/apartment/" + roomId);
    }

    return (
        <div>
            <img
                className="d-block w-100"
                src={houseBackground}
                alt="Winger"
            />
            <div className="scrollSection">
                <Row>
                    <Col className="leftTop rightBorder" xs={{ span: 12, order: 1 }} md={{ span: 3, order: 1 }}>
                        <h4 className="topText">Datum</h4>
                    </Col>
                    <Col className="rightTop" xs={{ span: 12, order: 3 }} md={{ span: 9, order: 2 }}>
                        <h4 className="topText">Onze appartementen</h4>
                    </Col>

                    <Col className="rightBorder" xs={{ span: 12, order: 2 }} md={{ span: 3, order: 3 }}>
                        <div className="bookSection">
                            {error ? <div className="error"><p>{errorMessage}</p></div> : <div className="noError"></div>}
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => (setCheckOutDisabled(false), setStartDate(date), setMinimumDate(tomorrow.setDate(date.getDate() + 1)))}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                minDate={new Date()}
                                customInput={<CustomCheckInDate />}
                            />
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                                selectsEnd
                                disabled={checkOutDisabled}
                                startDate={startDate}
                                endDate={endDate}
                                minDate={minimumDate}
                                customInput={<CustomCheckOutDate />}
                            />
                            <Row className="persons">
                                <Col xs={12} className="personsInput">
                                    <Select placeholder={"Adults"} styles={style} options={optionsAdult} onChange={(choice) => setAdults(choice.value)} />
                                </Col>
                                <Col xs={12} className="personsInput">
                                    <Select placeholder={"Child"} styles={style} options={optionsChild} onChange={(choice) => (howManyChild(choice.value))} />
                                </Col>
                            </Row>
                            {Array.from(Array(childs), (_, i) => {
                                return <Row key={i + 1} className="persons">
                                    <Col xs={4} className="personsInput">
                                        <p id="child-location">Kind {i + 1}:</p>
                                    </Col>
                                    <Col xs={8} className="personsInput">
                                        <Select placeholder={"Age"} styles={style} options={age} onChange={(choice) => editAge(i, choice.value)} />
                                    </Col>
                                </Row>
                            })}
                            <Row className="persons">
                                <button className="buttonBook" onClick={checkData}>Zoeken</button>
                            </Row>

                        </div>
                    </Col>
                    <Col xs={{ span: 12, order: 4 }} md={{ span: 9, order: 4 }}>
                        <Row>
                            <Col className="borderBottom" sm={12}>
                                <div className="apartmentDiv">
                                    <Row>
                                        <Col md={6}>
                                            <img className="roomImages" src={room_1} alt={"Room 1"} />
                                        </Col>
                                        <Col md={3} className="d-none d-md-block">
                                            <h4>Serfaus</h4>
                                        </Col>
                                        <Col md={3}>
                                            <h4>Serfaus</h4>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col className="borderBottom" sm={12}>
                                <div className="apartmentDiv">
                                    <Row>
                                        <Col md={6}>
                                            <img className="roomImages" src={room_2} alt={"Room 2"} />
                                        </Col>
                                        <Col md={3} className="d-none d-md-block">
                                            <h4>Serfaus</h4>
                                        </Col>
                                        <Col md={3}>
                                            <h4>Serfaus</h4>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col sm={12}>
                                <div className="apartmentDiv" onClick={() => { handleNavigation(3) }}>
                                    <Row>
                                        <Col md={6} className={"col-center"}>
                                            <img className="roomImages" src={room_3} alt={"Room 3"} />
                                        </Col>
                                        <Col md={3} className="d-none d-md-block">
                                            <h4>Serfaus</h4>
                                        </Col>
                                        <Col md={3}>
                                            <h4>Serfaus</h4>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div >
    )
}

export default Apartments