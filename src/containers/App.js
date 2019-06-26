import React from 'react'
import shajs from 'sha.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      options: 'sha',
      input: 'adf',
      output: ''
    }
    console.log(this.state.option)
  }

  render() {
    const title = 'Hash It'
    return (
      <div className="App">
        <Header title={ title } />
        <Input input={ this.state.input } />
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
    // this.handleInputChange = this.handleInputChange.bind(this)
    this.generateHash = this.generateHash.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.state = { input: '', ouptut: '', option: 'sha' }
  }

  // handleInputChange(event) {
  //   const input = event.target.value

  //   this.setState(() => {
  //     return { input: input }
  //   })
  // }
  handleOptionChange(event) {
    const option = event.target.value
console.log(option)
    this.setState(prev => {
      return { option: option }
    })
  }

  generateHash(event) {
    const input = event.target.value
console.log(input)
    this.setState(() => {
      return {
        input: input,
        ouptut: shajs(this.state.option).update(input).digest('hex')
      }
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="input"
          onChange={ this.generateHash }
        />
        <p>
          {
            this.state.ouptut
          }
        </p>
        <form>
          <label htmlFor="sha">SHA</label>
          <input type="radio" name="option" value="sha" id="sha" checked={ this.state.option === 'sha' } onChange={ this.handleOptionChange } />
          <label htmlFor="sha1">SHA1</label>
          <input type="radio" name="option" value="sha1" id="sha1" checked={ this.state.option === 'sha1' } onChange={ this.handleOptionChange } />
          <label htmlFor="sha256">SHA256</label>
          <input type="radio" name="option" value="sha256" id="sha256" checked={ this.state.option === 'sha256' } onChange={ this.handleOptionChange } />
        </form>
      </div>
    )
  }
}

class Output extends React.Component {
  render() {
    return (
      <input
        type="text"
        value={ this.props.output }
        onClick={ this.props.generateHash }
      />
    )
  }
}

// class Options extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleOptionChange = this.handleOptionChange.bind(this)
//     this.state = { option: 'sha' }
//   }

//   handleOptionChange(event) {
//     const option = event.target.value

//     this.setState(prev => {
//       return { option: option }
//     })
//   }

//   render() {
//     return (
//       <form>
//         <label htmlFor="sha">SHA</label>
//         <input type="radio" name="option" value="sha" id="sha" checked={ this.state.option === 'sha' } onChange={ this.handleOptionChange } />
//         <label htmlFor="sha1">SHA1</label>
//         <input type="radio" name="option" value="sha1" id="sha1" checked={ this.state.option === 'sha1' } onChange={ this.handleOptionChange } />
//         <label htmlFor="sha256">SHA256</label>
//         <input type="radio" name="option" value="sha256" id="sha256" checked={ this.state.option === 'sha256' } onChange={ this.handleOptionChange } />
//       </form>
//     )
//   }
// }

export default App;
