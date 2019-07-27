import React from 'react'

import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/styles'
import { Theme, createStyles } from '@material-ui/core'
import { BentoTextFieldPropsModel } from '../../models/BentoTextFieldPropsModel';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      // marginLeft: theme.spacing(1),
      // marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  }),
)

export default function(props: BentoTextFieldPropsModel) {
  // const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValues({ ...values, [name]: event.target.value })
  // }
  const classes = useStyles()

  const { disabled, type, id, label, value, defaultValue, multiline } = props

  return (
    <TextField
      disabled={disabled}
      id={id}
      label={label}
      type={type}
      className={classes.textField}
      value={value}
      placeholder={defaultValue}
      margin="normal"
      multiline={multiline}
    />
  )
}