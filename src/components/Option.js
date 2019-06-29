import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class Option extends Component {
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
        variant="info"
        value={ this.props.optionText }
        onClick={ this.handleChangeOption }
        className="m-1 text-uppercase"
      >
        { this.props.optionText }
      </Button>
    )
  }
}
