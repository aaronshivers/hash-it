import React from 'react'
import shajs from 'sha.js'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Buttons from './Buttons'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}))

export default function OutlinedTextFields() {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    multiline: 'Controlled',
    hash: '',
    input: '',
    output: ''
  })

  const handleChange = name => event => {
    const input = event.target.value
    const hashed = shajs('sha256').update(input).digest('hex')
    setValues({ ...values, [name]: input })
    setValues({output: hashed})
  }

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-multiline-static"
        label="Input"
        multiline
        rows="4"
        value={values.input}
        onChange={handleChange('input')}
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-multiline-static"
        label="Output"
        multiline
        rows="4"
        value={values.output}
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
    </form>
  )
}
