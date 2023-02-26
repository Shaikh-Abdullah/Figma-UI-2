import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Card from '../Card/Card'

function Features({ features, borderedcard }) {
  return (
    <>
      <div className='text-center container mt-5'>
        <h2>{features.header}</h2>
        <p>{features.desc}</p>

      </div>
      <Container>
        <Row>
          {
            features.data.map(card => {
              return (
                <Col xs={4}>
                  <Card {...card} bordered={borderedcard} />
                </Col>
              )
            })
          }


        </Row>
        {
          features.button &&
          <div className='text-center'>
            <button style={{
              color: '#FA5822',
              border: '1.5px solid #FA5822',
              background: 'white',
              padding: '11px 39px',
              borderRadius: '5px'
            }} className='cardbutton'>{features.button}</button>

          </div>

        }
      </Container>
    </>

  )
}

export default Features