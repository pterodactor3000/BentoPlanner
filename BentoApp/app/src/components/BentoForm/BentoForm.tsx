import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Typography, makeStyles } from '@material-ui/core'
import classes from '*.module.css'


const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none'
  },
}))

function BentoForm() {  
  const classes = useStyles()

  return (
    <div className={classes.paper}>
      <Typography variant="h6" id="modal-title">
        Text in a modal
      </Typography>
      <Typography variant="subtitle1" id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </div>
    )
  }

export default BentoForm