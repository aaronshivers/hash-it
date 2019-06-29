import React, { Component } from 'react'
import crypto from 'crypto'
import Container from 'react-bootstrap/Container'
import Header from '../components/Header'
import Input from '../components/Input'
import Output from '../components/Output'
import Options from '../components/Options'

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
          input={ this.state.input }
          option={ this.state.option }
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

Header.defaultProps = {
  title: 'Hash It'
}
