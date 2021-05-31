import React from 'react'
import { Container, Jumbotron, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { MenubarWithLogo } from './Menubar'
import { InterestForm } from './InterestForm'
import { HomeSearchForm} from './HomeSearch'

export const BannerArea = (props) => {
  return (
    <section className="banner-area" style={{position:"relative"}}>
      <header className="header">
        <Container>
          <Row>
            <Col>
              <MenubarWithLogo />
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        <Row className="search-form-wrapper">
          <Col sm={6} className="offset-3">
            <HomeSearchForm
              forMenubar={props.forMenubar}
              handleChange={props.handleChange}
              handleCategorySelect={props.handleCategorySelect}
              handleSubmit={props.handleSubmit}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Jumbotron className="jumbotron-cs">
              <h1>Powerful and flexible tools integrated for your use</h1>
              <p>Our integrated set of tools enable you to leisurely manage your online presence. With these unique tools, you can channel your energy and time towards creating unique products for your brand and have them available to your customers across the country, 24/7. </p>
              <p>We built and designed this platform for businesses on a first-come, first-serve basis. To indicate your interest, drop your email address and we will get back to you in little to no time.</p>
            </Jumbotron>
          </Col>
          <Col sm={6}>
            <img src={`assets/images/home/integrated.png`} />
          </Col>

          <Col>
            <div className="focus-points focus-points-ps">
              <div className="points w-r-border">
                <h6>Experience</h6>
                <p>We have giving priority to the needs of small to middle market businesses. It is our believe that </p>
                <img src={`assets/images/home/focus-on.png`} alt="Experience" />
              </div>
              <div className="points w-r-border">
                <img src={`assets/images/home/strategize.png`} className="mb-10" alt="Strategy" />
                <h6>Strategy</h6>
                <p>We focus on the needs of small to middle market businesses not the fortune 5000.</p>
              </div>
              <div className="points">
                <h6>Growth Proportion</h6>
                <p>Your business grows faster and yields bigger returns when you are able to reach a wider audience.</p>
                <img src={`assets/images/home/growth-proportion.png`} alt="Growth Proportion" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div class="custom-shape-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
      </svg>
      </div>
    </section>
  )
}
