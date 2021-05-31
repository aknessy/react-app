import { React } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

export const InterestAreas = () => {
  return (
    <>
      <h1><span>Areas</span> we benefit you</h1>
      <div className="areas-interest-wrapper">
        <Container>
          <Row>
            <Col sm={4}>
              <div className="benefit-areas">
                <img src={`assets/images/home/sales-performance.png`} alt="Accounting" />
                <h5 className="header">Accounting</h5>
                <p>Keep track of your sales performance as well as earnings and expenditure. Our Sales performance/ accounting API is tested and reliable.</p>
              </div>
            </Col>
            <Col sm={4}>
              <div className="benefit-areas">
                <img src={`assets/images/home/connected-people.png`} alt="Networking" />
                <h5 className="header">Networking</h5>
                <p>Watch your business expand as we connect you to thousands of buyers nation-wide.</p>
              </div>
              </Col>
            <Col sm={4}>
              <div className="benefit-areas">
                <img src={`assets/images/home/commercial.png`} alt="" />
                <h5 className="header">Marketing</h5>
                <p>You can focus your time and energy building an enviable business. Let us worry about how your business reaches its targeted audience.</p>
              </div>
            </Col>
            <Col sm={4}>
              <div className="benefit-areas">
                <img src={`assets/images/home/administrative-tool.png`} alt="Management" />
                <h5 className="header">Management</h5>
                <p>We keep you up to speed whether you are online or offline. This ensures you never miss an order.</p>
              </div>
            </Col>
            <Col sm={4}>
              <div className="benefit-areas">
                <img src={`assets/images/home/cn-tower.png`} alt="Management" />
                <h5 className="header">Resources</h5>
                <p>Access to a wide array of visitors (Tourists) via AirBnb for hotels/accomodations listings.</p>
              </div>
            </Col>
            <Col sm={4}>
              <div className="benefit-areas">
                <img src={`assets/images/home/tape-measurement.png`} alt="DIY(Do It Yourself)" />
                <h5 className="header">DIY</h5>
                <p>You can always make personalized changes to system configurations that do not serve you appropriately.</p>
              </div>
            </Col>
          </Row>

          <div class="shape-divider">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="color-fill"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="color-fill"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="color-fill"></path>
            </svg>
          </div>
        </Container>
      </div>
    </>
  )
}
