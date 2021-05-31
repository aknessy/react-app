import { React, Component } from 'react'
import { Col, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HomeSearchForm } from './HomeSearch'

export const Toolbar = (props) => {
  return (
    <Col>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar-cs">
        <Navbar.Toggle aria-controls="responsive-toolbar-nav" />
        <Navbar.Collapse id="responsive-toolbar-nav">
          <Nav className="mr-2">
            <Nav.Item>
              <Link to="/stores" className="nav-link nav-link-cs">
                <small><i className="icofont-shopify"></i> Stores</small>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/accomodations" className="nav-link">
                <small><i className="icofont-luggage"></i> Accomodation</small>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/recreaction" className="nav-link">
                <small><i className="icofont-beverage"></i> Relaxation</small>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/fitness-spar" className="nav-link">
                <small><i className="icofont-heart"></i> Fitness & Spar</small>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/carnival" className="nav-link">
                <small><i className="icofont-horn"></i> Events</small>
              </Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <HomeSearchForm
              forMenubar={props.forMenubar}
              handleSubmit={props.submit}
              handleChange={props.handleSearchFieldChange}
              handleCategorySelect={props.handleDropdownItems}
             />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  )
}
