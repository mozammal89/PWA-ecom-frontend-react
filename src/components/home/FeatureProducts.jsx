import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class FeatureProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2>FEATURED PRODUCT</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>


          <Row>
            <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6}>
            <Link to="/productdetails" className=''>
              <Card className='image-box'>
                <img className='center' src="https://www.mobiledokan.com/wp-content/uploads/2022/05/Samsung-Galaxy-F23-5G.jpg" />
                <Card.Body>
                  <p className='product-name-on-card'>Samsung Galaxy F23 5G</p>
                  <p className='product-price-on-card'>Price : BDT 3000</p>
                </Card.Body>
              </Card>
              </Link>
            </Col>

            <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6}>
              <Card className='image-box'>
                <img className='center' src="https://www.mobiledokan.com/wp-content/uploads/2022/05/Samsung-Galaxy-M33.jpg" />
                <Card.Body>
                  <p className='product-name-on-card'>Samsung Galaxy M33 5G</p>
                  <p className='product-price-on-card'>Price : BDT 3000</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6}>
              <Card className='image-box'>
                <img className='center' src="https://www.mobiledokan.com/wp-content/uploads/2022/08/Samsung-Galaxy-Z-Fold-4.jpg" />
                <Card.Body>
                  <p className='product-name-on-card'>Samsung Galaxy Z Fold4</p>
                  <p className='product-price-on-card'>Price : BDT 3000</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6}>
              <Card className='image-box'>
                <img className='center' src="https://www.mobiledokan.com/wp-content/uploads/2022/08/Samsung-Galaxy-Z-Flip4.jpg" />
                <Card.Body>
                  <p className='product-name-on-card'>Samsung Galaxy Z Flip4</p>
                  <p className='product-price-on-card'>Price : BDT 3000</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6}>
              <Card className='image-box'>
                <img className='center' src="https://www.mobiledokan.com/wp-content/uploads/2022/08/Samsung-Galaxy-F13.jpg" />
                <Card.Body>
                  <p className='product-name-on-card'>Samsung Galaxy F13 </p>
                  <p className='product-price-on-card'>Price : BDT 3000</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className='p-1' key={1} xl={2} lg={2} sm={4} xs={6}>
              <Card className='image-box'>
                <img className='center' src="https://www.mobiledokan.com/wp-content/uploads/2022/07/Samsung-Galaxy-M53-5G.jpg" />
                <Card.Body>
                  <p className='product-name-on-card'>Samsung Galaxy M53 5G</p>
                  <p className='product-price-on-card'>Price : BDT 3000</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>


        </Container>

      </Fragment>
    )
  }
}

export default FeatureProducts