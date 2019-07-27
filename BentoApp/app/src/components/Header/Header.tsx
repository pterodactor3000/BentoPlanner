import React from 'react'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AddIcon from '@material-ui/icons/Add'
import { Menu, MenuItem, ListItemIcon } from '@material-ui/core'
import BentoDialog from '../BentoDialog/BentoDialog'

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
    }
  }),
)

function Header() {
  const classes = useStyles()
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [open, setOpen] = React.useState(false)

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }
  
  const handleCloseDialog = (value: string) => {
    setOpen(false)
  }

  function openModal() {
    setOpen(true)
    handleClose()
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
          </Menu>
          <Typography variant="h6" className={classes.title}>
            BentoPlanner
          </Typography>
        </Toolbar>
        <BentoDialog open={open} onClose={handleCloseDialog}/>
      </AppBar>
    </div>
  )
}

export default Header
