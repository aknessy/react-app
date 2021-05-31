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
              <img src={`assets/images/home/platforms.png`} alt="Platforms" />
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
                <div className="platforms">
                  <img src={`assets/images/home/usb-plug.png`} alt="Consumer Electronics" />
                  <h5 className="header">Consumer Electronics</h5>
                  <p>Improved and efficient access to consumer electronics for entertainment, communications, recreation, housekeeping, internet access, etc. </p>
                </div>
              </Col>
              <Col sm={6}>
                <div className="platforms">
                  <img src={`assets/images/home/unisex.png`} alt="Clothings" />
                  <h5 className="header">Clothing</h5>
                  <p>Finding that perfect piece of clothing from your favourite labels and designers is as easily tik-tok. For the love of luxury fashion, look no further.</p>
                </div>
              </Col>
              <Col sm={6}>
                <div className="platforms">
                  <img src={`assets/images/home/bar-glass.png`} alt="Liquor" />
                  <h5 className="header">Drinks & Liquor</h5>
                  <p>Access to retail and convenience stores that predominantly sell beveraged drinks, wine and other pre-packaged liguors typically in bottles.</p>
                </div>
              </Col>
              <Col sm={6}>
                <div className="platforms">
                  <img src={`assets/images/home/fast-food-tacos.png`} alt="Eatries" />
                  <h5 className="header">Eatries & Fast food</h5>
                  <p>Finding food outlets or drive-ins to purchase your favorite meals from the comfort of your room or offices has never been easier.</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
