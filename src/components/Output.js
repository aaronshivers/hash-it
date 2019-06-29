import React from 'react'
import Alert from 'react-bootstrap/Alert'

export default props => (
  <div>
    {
      props.hash &&
      <Alert className="mt-3" variant="info">
        <Alert.Heading className="text-center text-uppercase">{ props.option }</Alert.Heading>
        <h6>Input</h6>
        <p className="text-center text-break">{ props.input }</p>
        <h6>Output</h6>
        <p className="text-center text-break">{ props.hash }</p>
      </Alert>
    }
  </div>
)
