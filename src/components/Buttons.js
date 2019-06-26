import React from 'react'

export default class Buttons extends React.Component {
  constructor() {
    super()
    this.state = { hash: '' }
  }

  handleChange(event) {
    setState({ hash: event.target.value })
  }

  render() {
    return (
      <div>
        <label>
          sha
          <input type="radio" value="sha" onClick={ this.handleChange } />
        </label>
        <label>
          sha1
          <input type="radio" value="sha1" onClick={ this.handleChange } />
        </label>
        <label>
          sha256
          <input type="radio" value="sha256" onClick={ this.handleChange } />
        </label>
      </div>
    )
  }
}
