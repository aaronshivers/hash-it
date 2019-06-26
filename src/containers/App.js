import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      option: 'sha',
      input: 'adf',
      output: 'fda'
    }
  }

  render() {
    const title = 'Hash It'
    return (
      <div className="App">
        <Header title={ title } />
        <Input input={ this.state.input } />
        <Output ouptut={ this.state.output } />
        <Buttons />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>
      </div>
    )
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = { input: '' }
  }

  handleInputChange(event) {
    const input = event.target.value

    this.setState(prevState => {
console.log(prevState)
      return { input: this.state.input + prevState.input + input }
    })
  }

  render() {
    return (
      <input
        type="text"
        name="input"
        value={ this.props.input }
        onChange={ this.handleInputChange }
      />
    )
  }
}

class Output extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  handleOnPageLoad() {
    console.log(this.props.output)
  }

  render() {
    return (
      <input
        type="text"
        value={ this.props.output }
        onPageLoad={ handleOnPageLoad }
      />
    )
  }
}

class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.state = { option: 'sha' }
  }

  handleOptionChange(event) {
    const option = event.target.value

    this.setState(prev => {
      return { option: option }
    })
  }

  render() {
    return (
      <form>
        <label htmlFor="sha">SHA</label>
        <input type="radio" name="option" value="sha" id="sha" checked={ this.state.option === 'sha' } onChange={ this.handleOptionChange } />
        <label htmlFor="sha1">SHA1</label>
        <input type="radio" name="option" value="sha1" id="sha1" checked={ this.state.option === 'sha1' } onChange={ this.handleOptionChange } />
        <label htmlFor="sha256">SHA256</label>
        <input type="radio" name="option" value="sha256" id="sha256" checked={ this.state.option === 'sha256' } onChange={ this.handleOptionChange } />
      </form>
    )
  }
}

export default App;
