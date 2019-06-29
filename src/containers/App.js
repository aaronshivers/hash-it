import React, { Component } from 'react'
import crypto from 'crypto'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleChangeOption = this.handleChangeOption.bind(this)
    this.state = {
      input: props.input,
      options: props.options,
      option: props.option,
      hash: undefined
    }
  }

  componentDidUpdate() {
    const option = this.state.option
    const input = this.state.input
    const hash = crypto.createHash(option).update(input).digest('hex')
    if (this.state.hash !== hash) {
      this.setState(() => ({ hash }))
    }    
  }

  handleInputChange(input) {
    this.setState(() => ({ input }))
  }

  handleChangeOption(option) {
    this.setState(() => ({ option }))
  }

  render() {
    return (
      <Container>
        <Header />
        <Input
          handleInputChange={ this.handleInputChange }
        />
        <Options
          options={ this.state.options }
          handleChangeOption={ this.handleChangeOption }
        />
        <Output
          hash={ this.state.hash }
        />
      </Container>
    )
  }
}

App.defaultProps = {
  input: '',
  options: ['sha', 'sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'md5'],
  option: 'sha'
}

const Header = props => (
    <h1 className="display-2 text-center">{ props.title }</h1>
)

Header.defaultProps = {
  title: 'Hash It'
}

class Input extends Component {
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
        </Form.Group>
      </Form>
    )
  }
}

const Output = props => (
  <Row className="mt-3">
    <Col>
      <p className="text-center text-break">{ props.hash }</p>
    </Col>
  </Row>
)

const Options = props => (
  <Row className="justify-content-center">
    <ButtonGroup>
      {
        props.options.map((option, i) => (
          <Option
            key={ i }
            optionText={ option }
            handleChangeOption={ props.handleChangeOption }
          />
        ))
      }
    </ButtonGroup>
  </Row>
)

class Option extends Component {
  constructor(props) {
    super(props)
    this.handleChangeOption = this.handleChangeOption.bind(this)
    this.state = {
      option: this.props.optionText
    }
  }

  handleChangeOption(event) {
    const option = event.target.value

    this.props.handleChangeOption(option)
    this.setState(() => ({ option }))
  }

  render() {
    return (
      <Button
        value={ this.props.optionText }
        onClick={ this.handleChangeOption }
      >
        { this.props.optionText }
      </Button>
    )
  }
}
