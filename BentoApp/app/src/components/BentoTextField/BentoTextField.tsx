import React from 'react'

import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/styles'
import { Theme, createStyles, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core'
import { BentoTextFieldPropsModel } from '../../models/BentoTextFieldPropsModel';
import { values } from 'mobx';
import { ApiService } from '../../services/ApiService';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textFieldWrapper: {
      minWidth: 600,
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'stretch'
    },
    textFieldDetails: {
      justifyContent: 'space-evenly',
      alignItems: 'stretch'
    },
    textField: {
      // marginLeft: theme.spacing(1),
      // marginRight: theme.spacing(1),
      width: '100%',
    },
    ingredientField: {
      width: '70%',
    },
    unitsField: {
      width: '15%',
    },
    unitsSelect: {
      width: '15%',
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  }),
)

const service = new ApiService()

const BentoTextField = (props: BentoTextFieldPropsModel) => {
  const classes = useStyles()

  const { disabled, type, id, label, value, defaultValue, multiline, withUnits } = props

  return (
    <div 
      className={classes.textFieldWrapper}>
      <FormControl>
        <TextField
          disabled={disabled}
          id={id}
          label={label}
          type={type}
          className={!withUnits ? classes.textField : classes.ingredientField}
          value={value}
          placeholder={defaultValue}
          margin="normal"
          multiline={multiline}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="age-simple">Pora roku</InputLabel>
        <Select
          value={{}}
          // onChange={handleChange}
          inputProps={{
            name: '',
            id: '',
          }}>
          <MenuItem value={'kg'}> {'kilogram'} </MenuItem>
          <MenuItem value={'g'}> {'gram'} </MenuItem>
          <MenuItem value={'oz.'}> {'uncja'} </MenuItem>
        </Select>
      </FormControl>
      {
        withUnits && 
        <div
          className={classes.textFieldDetails}>
          <TextField
            disabled={disabled}
            id={`${id}-units`}
            label="Ilość"
            type="number"
            className={classes.unitsField}
            value={value}
            placeholder="0"
            margin="normal"
          />
          <InputLabel htmlFor="age-simple">Jednostka</InputLabel>
          <Select
            value={{}}
            // onChange={handleChange}
            inputProps={{
              name: '',
              id: '',
            }}>
            <MenuItem value={'kg'}> {'kilogram'} </MenuItem>
            <MenuItem value={'g'}> {'gram'} </MenuItem>
            <MenuItem value={'oz.'}> {'uncja'} </MenuItem>
          </Select>
          <TextField
            disabled={disabled}
            id={`${id}-kcal`}
            label="Kalorie"
            type="number"
            className={classes.unitsField}
            value={''}
            placeholder="0"
            margin="normal"
          />
        </div>
      }
    </div>
  )
}

export default BentoTextField