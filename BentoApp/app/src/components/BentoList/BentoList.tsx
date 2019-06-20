import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { ApiService } from '../../services/ApiService'

import './BentoList.scss';
import { Grid, makeStyles, Theme, createStyles } from '@material-ui/core';
import Bento from '../Bento/Bento';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '20px'
    }
  }),
)

@inject('BentoStore')
@observer
export default class BentoList extends Component<{ BentoStore?: any; }> {
  apiService: ApiService = new ApiService()

  constructor(props: any) {
    super(props)
    this.apiService.getBentoList().then((response) => {
      this.props.BentoStore.setBentoList(response.data)
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    const { BentoStore } = this.props

    const classes = useStyles()
    return (
      <div className={classes.root}>
        <Grid container spacing={5}>
          {BentoStore.list.map( (item: any, i: number) => { 
                return (
                  <Bento key={i} bento={item.name} season={item.season}> </Bento>
                )
              }
            )
          }
        </Grid>
      </div>
    )
  }
}
