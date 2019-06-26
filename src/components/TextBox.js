import React from 'react'
import shajs from 'sha.js'
  
export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      hash: 'sha256',
      input: ''
    }
  }

  getInput = event => this.setState({ input: shajs(this.state.hash).update(event.target.value).digest('hex') })

  render() {
    const { input } = this.state
    
    return (
      <div>
        <input onChange={ this.getInput }></input>
        <p>{ input }</p>
      </div>
    )
  }
}
  
// export default class extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       input: ''
//     }
//   }

//   getInput = event => this.setState({ input: shajs('sha256').update(event.target.value).digest('hex') })

//   render() {
//     const { input } = this.state
//     return (
//       <div>
//         <input onChange={ this.getInput }></input>
//         <p>{ input }</p>
//       </div>
//     )
//   }
// }
