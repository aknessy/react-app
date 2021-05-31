import { React } from 'react'
import { Row, Col } from 'react-bootstrap'

export const HomeAnalytics = () => {
  return (
    <Row className="home-analytics flex-row-reverse">
      <Col sm={6}>
        <div className="home-analytics-image">
          <img className="first-image fadeInUp" alt="" src={`/assets/images/home/analytices6.jpg`} />
          <img className="second-image fadeInRight" alt="" src={`/assets/images/home/analytices7.jpg`} />
          <div className="third-image">
            <img className="wow fadeInDown" alt="" src={`/assets/images/home/analytices8.jpg`} />
          </div>
          <img className="wow fadeInUp" alt="" src={`/assets/images/home/analytices5.jpg`} />
        </div>
      </Col>
      <Col sm={6}>
        <div className="home-analytics-content">
          <h2 className="wow fadeInUp">Measure product usage and relevant analytics for every customer</h2>
          <p className="wow fadeInUp">We have integrated a variety of tools to enable you monitor customer interaction  within your shop.</p>
          <ul className="list-unstyled">
            <li><span>Flexible, fast reporting: </span>Site admins, shop owners, and users with relevant and authorized roles can view site usage data</li>
            <li><span>Access your data anywhere: </span>Get access to shop specific analytics from both mobile and web, where ever you are.</li>
            <li><span>Export site usage data: </span>Site owners can export site usage data in an excel file by going to the download button on site analytics page</li>
            <li><span>Fetch data by popularity: </span>Shows the most popular content on the site sorted by order rate, views, and likes.</li>
          </ul>
        </div>
      </Col>
    </Row>
  )
}
