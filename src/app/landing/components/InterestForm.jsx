import { React } from 'react'
import { Form, Row, Button } from 'react-bootstrap'

export const InterestForm = (props) => {
  return(
    <Form inline>
      <Form.Label htmlFor="interestEmail" srOnly>Email Address</Form.Label>
      <Form.Control
        type="email"
        id="interestEmail"
        value={props.emaildata}
        name="interestEmail"
        placeholder="Corporate email"
        onChange={props.handleChange}
        autoComplete="off"
        className="form-control-home mr-2"
      >
      </Form.Control>
      <Button
        size="sm"
        type="button"
        variant="warning"
        onClick={props.handleSubmit}
        className="btn-cs btn-flex-cs"
      >
        <i className="icofont-check-alt icofont-2x"></i>I'd like a Cooporate Account
      </Button>
      <br />
      <p>{props.emaildata}</p>
    </Form>
  )
}
