import { React } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from '@material-ui/core/button'

export const FeaturesArea = (props) => {
  return (
    <section className="features-area">
      <Container>
        <Row>
          <Col sm={5}>
            <div className="text-wrapper">
              <h4>Platforms</h4>
              <h5 className="mb-25">An all-in-one platform with tools to cater for every business</h5>
              <img src={`assets/images/home/easter-basket.png`} alt="Platforms" />
            </div>
          </Col>
          <Col sm={7}>
            <Row>
              <Col sm={6}>
                <div className="platforms">
                  <img src={`assets/images/home/natural-food.png`} alt="Natural Foods" />
                  <h5 className="header">Natural Foods</h5>
                  <p>Your customers and online shoppers can buy ready-made, rich and freshly harvested collection of different food stuff, beverages and fruits all in one place.</p>
                </div>
              </Col>
              <Col sm={6}>
                <div className="platforms">
                  <img src={`assets/images/home/rocking-chair.png`} alt="Accomodation" />
                  <h5 className="header">Accomodation</h5>
                  <p>Customers can find amazing, comfortable and reliable accomodations using our apartment-finder service or access properties and lands via our real-estate listing service.</p>
                </div>
              </Col>
              <Col sm={6}>
                <img src={`Relaxation`} alt="Relaxation" />
                <h5 className="header">Relaxation</h5>
                <p></p>
              </Col>
              <Col sm={6}>
                <div className="platforms">
                  <img src={`assets/images/home/unisex.png`} alt="Clothings" />
                  <h5 className="header">Clothing</h5>
                  <p>Finding that perfect piece of clothing from your favourite labels and designers is as easily tik-tok. For the love of luxury fashion, look no further.</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
