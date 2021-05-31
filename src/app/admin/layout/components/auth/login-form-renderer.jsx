import { React, Component } from 'react'
import { Spinner } from '../../../shared/components/spinner/spinner.component'
import { Form, InputGroup, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const LoginForm = (props) => {
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
            <h4  className="mb-3 login-text">Login below to access dashboard.</h4>
          </div>
        </Col>
        <Col md="auto" style={styling}>
          <Form className="form">
            <Form.Group controlId="formPassword">
              <Form.Label srOnly>Email</Form.Label>
              <InputGroup className="input-group-login-cs">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <i className="icofont-at"></i>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  className="form-control-cs"
                  type="email"
                  name="email"
                  value={props.data.email}
                  placeholder="Email"
                  autoComplete="off"
                  onChange={props.handleChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label srOnly>Password</Form.Label>
              <InputGroup className="input-group-login-cs">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <i className="icofont-key"></i>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  className="form-control-cs"
                  type="password"
                  name="password"
                  value={props.data.password}
                  placeholder="Password"
                  onChange={props.handleChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="formRemember" className="pb-0 mb-0">
              <Form.Check
                type="checkbox"
                name="remember"
                checked={props.data.remember}
                label="Remember login"
                onChange={props.handleChange}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col md="auto">
          <Link to="/auth/passwordreset" className="btn btn-link text-center btn-cs" style={{fontSize:"12px"}}>
            <small>Forgot your password?</small>
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
