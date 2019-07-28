import React from 'react'

import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/styles'
import { Theme, createStyles, InputLabel, Select, MenuItem } from '@material-ui/core'
import { BentoTextFieldPropsModel } from '../../models/BentoTextFieldPropsModel';
import { values } from 'mobx';
import { ApiService } from '../../services/ApiService';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textFieldWrapper: {
      width: 400
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

export default function(props: BentoTextFieldPropsModel) {
  // const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValues({ ...values, [name]: event.target.value })
  // }
  const classes = useStyles()

  const { disabled, type, id, label, value, defaultValue, multiline, withUnits } = props

  // get from store!!!
  const units = service.getUnits()

  return (
    <div 
      className={classes.textFieldWrapper}>
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
      {
        withUnits && 
        <div>
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
          <InputLabel htmlFor="age-simple">Age</InputLabel>
          <Select
            value={{}}
            // onChange={handleChange}
            inputProps={{
              name: '',
              id: '',
            }}>
            <MenuItem value={10}>Ten</MenuItem>
            {/* {units.map( (item: any, i: number) => { 
                  return (
                    <Bento key={i} bento={item.name} season={item.season}> </Bento>
                  )
                }
              )
            } */}
          </Select>
        </div>
      }
    </div>
  )
}