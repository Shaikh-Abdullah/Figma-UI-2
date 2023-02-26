import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import macbook from '../../assets/macbook.png';
import './Createaccont.css'

function Createaccounts() {
  return (
    <Container >
        <Row className='justify-content-center py-5 my-5'>
            <Col xs={6}>
                    <img src={macbook}/>
            </Col>
            <Col xs={6} className='d-flex align-items-center'>
                <div>
                <h3>Apply for your account digitally in minutes</h3>
                <ul type='circle'>
                    <li className='listitem'>
                        <strong>
                        Online Application <br/>

                        </strong>
                        <span className='litext'>Fill in the required details at your convenience</span>
                    </li>
                    <li className='listitem'>Upload Documents</li>
                    <li className='listitem'>Opening Kit</li>
                    <li className='listitem'>Start Banking</li>
                </ul>
                </div>
                
            </Col>
        </Row>
    </Container>
  )
}

export default Createaccounts