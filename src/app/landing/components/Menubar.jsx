import React from 'react'
import { Container, Row, Col, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

export const MenubarWithLogo = (props) => {
  return (
      <Navbar collapseOnSelect expand="lg" className="navbar-cs">
        <Link className="navbar-brand" to="/home">
          <img src={`/assets/images/logo.png`} alt="logo" />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Link to="/user/register" className="nav-link warning">
                <small><i className="icofont-ui-love-add"></i> Create account</small>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}
