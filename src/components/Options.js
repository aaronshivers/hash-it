import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Option from '../components/Option'

export default props => (
  <Row className="justify-content-center">
    <Col>
      <ButtonToolbar className="justify-content-center">
        {
          props.options.map((option, i) => (
            <Option
              key={ i }
              optionText={ option }
              handleChangeOption={ props.handleChangeOption }
            />
          ))
        }
      </ButtonToolbar>
    </Col>
  </Row>
)
