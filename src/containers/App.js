import React, { Component } from 'react'
import crypto from 'crypto'

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
      <div>
        <Header />
        <Input
          handleInputChange={ this.handleInputChange }
        />
        <Output
          hash={ this.state.hash }
        />
        <Options
          options={ this.state.options }
          handleChangeOption={ this.handleChangeOption }
        />
      </div>
    )
  }
}

App.defaultProps = {
  input: '',
  options: ['sha', 'sha1', 'sha224', 'sha256', 'sha384', 'sha512', 'md5'],
  option: 'sha'
}

const Header = props => (
  <div>
    <h1>{ props.title }</h1>
  </div>
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
      <div>
        <form onSubmit={ this.handleInputChange }>
          <input type="text" name="input" />
          <button>Hash It</button>
        </form>
      </div>
    )
  }
}

const Output = props => (
  <div>
    <p>{ props.hash }</p>
  </div>
)

const Options = props => (
  <div>
    {
      props.options.map((option, i) => (
        <Option
          key={ i }
          optionText={ option }
          handleChangeOption={ props.handleChangeOption }
        />
      ))
    }
  </div>
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
      <div>
        <button
          value={ this.props.optionText }
          onClick={ this.handleChangeOption }
        >
          { this.props.optionText }
        </button>
      </div>
    )
  }
}
