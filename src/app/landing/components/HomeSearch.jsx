import { React, useState } from 'react'
import Fade from 'react-bootstrap/Fade'
import { Form, FormControl, InputGroup, Button, Dropdown, DropdownButton, Col } from 'react-bootstrap'

export const HomeSearchForm = (props) => {
  const [open, setOpen] = useState(false)

  const style = {
    textTransform : 'capitalize'
  }

  return (
    <Form className="search-form">
      <Form.Row>
        <Col>
          <Form.Group controlId="homeSearchForm">
            <InputGroup className="input-group-cs">
              <FormControl
                type="text"
                name="searchTerm"
                placeholder="Search..."
                className="form-control-home"
                value={props.forMenubar.searchTerm}
                onChange={props.handleChange}
              />
              <DropdownButton
                style={style}
                as={InputGroup.Append}
                title={props.forMenubar.narrowDown ? props.forMenubar.narrowDown : 'Set search category'}
                id="input-group-dropdown-2"
              >
                <span className="dropdown-item" onClick={props.handleCategorySelect}>Stores</span>
                <span className="dropdown-item" onClick={props.handleCategorySelect}>Accomodation</span>
                <span className="dropdown-item" onClick={props.handleCategorySelect}>Relaxation</span>
                <span className="dropdown-item" onClick={props.handleCategorySelect}>Fitness & Spar</span>
                <span className="dropdown-item" onClick={props.handleCategorySelect}>Events</span>
              </DropdownButton>
              <InputGroup.Append>
                <Button type="submit" variant="secondary" onClick={props.handleSubmit}>
                  <i className="icofont-ui-search"></i>
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Col>
      </Form.Row>
    </Form>
  )
}
