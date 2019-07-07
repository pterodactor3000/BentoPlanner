import React from "react";
import { Grid, Typography, makeStyles, Theme, createStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    bento: {
      'border-radius': 0,
      'min-height': '80px',
      'display': 'flex',
      'align-items': 'center'
    },
    bento__spring: {
      'background': 'linear-gradient(to right, rgba(252, 0, 255, 0.2), rgba(0, 219, 222, 0.2))'
    },
    bento__summer: {
      'background': 'linear-gradient(to right, rgba(34, 193, 195, 0.2), rgba(253, 187, 45, 0.2))'
    },
    bento__autumn: {
      'background': 'linear-gradient(to right, rgba(26, 42, 108, 0.2), rgba(178, 31, 31, 0.2), rgba(253, 187, 45, 0.2))'
    },
    bento__winter: {
      'background': 'linear-gradient(to right, rgba(64, 59, 74, 0.2), rgba(231, 233, 187, 0.2))'
    },
    name: {
      padding: '5px'
    }
  })
)

function Bento(props: any) {
  const classes = useStyles()
  let style = [
    classes.bento,
    props.season === 'Wiosna' ? classes.bento__spring : 
    props.season === 'Lato' ? classes.bento__summer : 
    props.season === 'Jesień' ? classes.bento__autumn : 
    props.season === 'Zima' ? classes.bento__winter : ''
  ]

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper className={style.join(' ')}>
        <div className={classes.name}>
          {props.bento.split(' / ').map( (item: any, i: number) => { 
                return (
                  <Typography key={i}>
                    {item}
                  </Typography>
                )
              }
            )
          }
        </div>
      </Paper>
    </Grid>
  )
}

export default Bento