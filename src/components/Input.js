import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class extends Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      input: undefined
    }
  }

  handleInputChange(event) {
    event.preventDefault()

    const input = event.target.elements.input.value

    this.props.handleInputChange(input)
    this.setState(() => ({ input }))

    event.target.elements.input.value = ''
  }

  render() {
    return (
      <Form onSubmit={ this.handleInputChange }>
        <Form.Group>
          <Form.Label>Input</Form.Label>
          <Form.Control
            type="text"
            name="input"
            placeholder="Enter something you want hashed"
          />
          <Button
            type="submit"
            className="mt-3"
            variant="warning"
            block
          >
            Hash It
          </Button>
        </Form.Group>
      </Form>
    )
  }
}
