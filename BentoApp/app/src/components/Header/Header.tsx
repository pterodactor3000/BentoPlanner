import React from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AddIcon from '@material-ui/icons/Add'
import { Menu, MenuItem, ListItemIcon, Modal, Slide } from '@material-ui/core';
import BentoForm from '../BentoForm/BentoForm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    gradient: {
      'background': 'linear-gradient(to right, #38ef7d, #11998e)'
    },
    modal: {
      alignItems:'center', 
      justifyContent:'center', 
      display: 'flex'
    },
    modalContent: {
      top: `25%`,
      margin:'auto'
    }
  }),
)

function Header() {
  const classes = useStyles();
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [open, setOpen] = React.useState(false)

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null)
  }

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.gradient} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu id="menu" 
            anchorEl={anchorEl} 
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem onClick={openModal}>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              Dodaj bento
            </MenuItem>

            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={open}
              onClose={closeModal}
              className={classes.modal}>
              <Slide direction="up" in={open} mountOnEnter unmountOnExit>
                  
                <div
                  className={classes.modalContent}>
                  <BentoForm/>
                </div>
              </Slide>
            </Modal>

          </Menu>
          <Typography variant="h6" className={classes.title}>
            BentoPlanner
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
