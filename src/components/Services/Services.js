import React from 'react'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/Container';
import serviceImg from '../../assets/macbook.png';

import './Services.css';

function Services({ service }) {
    return (
        <div className="services__body">
            <Container fluid className='mt-5'>
                <h2 className='p-3'>{service.header}</h2>
                <h5 className='lead ml-3 mb-5'>{service.info}</h5>
                <Row className="text-center d-flex justify-content-around">
                    {
                        service.data.map(ser => {
                            return (
                                <Col xs={3}>
                                    <img src={serviceImg} className="service__img" />
                                    <h3>{ser.data__heading}</h3>
                                    <p>{ser.data__info}</p>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Services
