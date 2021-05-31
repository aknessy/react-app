import { React, Component } from 'react'
import { Form, InputGroup, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Spinner } from '../../../shared/components/spinner/spinner.component'

export const PasswordResetForm = (props) => {
  const styling = {
    backgroundColor: '#1e2746',
    borderColor: '#333a54',
    borderRadius: 6,
    padding: '20px 15px'
  }

  return (
    <div className="bg">
      <Container>
        <Row className="center">
          <Col md="auto">
            <div className="login-icon">
              <span className="person icofont-user icofont-3x mb-3"></span>
              <h4  className="mb-3 login-text">Enter your phone number to reset your password</h4>
            </div>
          </Col>
          <Col md="auto" style={styling}>
            <Form className="form">
              <Form.Group controlId="formPhone">
                <Form.Label srOnly>Phone Number</Form.Label>
                <InputGroup className="input-group-cs">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <i className="icofont-iphone"></i>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    className="form-control-cs"
                    type="text"
                    name="phone"
                    value={props.data.phone}
                    placeholder="Phone number"
                    autoComplete="off"
                    size="sm"
                    onChange={props.handleChange}
                  />
                </InputGroup>
              </Form.Group>
            </Form>
          </Col>
          <Col md="auto">
            <Link to="/auth" className="btn btn-link text-center btn-cs" style={{fontSize:"12px"}}>
              <small><i className="icofont-stylish-left"></i>&nbsp; Return to Login</small>
            </Link>
            <div className="button-container">
              {
                props.data.isSubmitted ? <Spinner align="spinner-inline" className="mr-2" /> :
                <button
                  type="button"
                  className="btn btn-outline-warning btn-sm mr-2"
                  onClick={props.handleSubmit}
                  >
                  <i className="icofont-check-alt icofont-2x"></i>
                </button>
              }
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm ml-2"
                onClick={props.handleReset}
                >
                <i className="icofont-close-line icofont-2x"></i>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
