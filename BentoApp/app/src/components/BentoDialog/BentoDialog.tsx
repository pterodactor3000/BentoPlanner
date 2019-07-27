import React from 'react'
import { Typography, Slide, Dialog, DialogTitle, DialogContent } from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'
import { BentoDialogPropsModel } from '../../models/BentoDialogPropsModel'
import BentoTextField from '../BentoTextField/BentoTextField';


const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

// const useStyles = makeStyles(theme => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(4),
//     outline: 'none'
//   },
// }))

function BentoDialog(props: BentoDialogPropsModel) {  

  const { onClose, open } = props

  function closeModal() {
    onClose('')
  }

  return (
    <Dialog
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      TransitionComponent={Transition}
      open={open}
      keepMounted
      onClose={closeModal}>
      <DialogTitle>
        Bento edytor
      </DialogTitle>
      <DialogContent>
        <BentoTextField 
          disabled={false}
          type={'text'}
          id={'bento-name'}
          label={'Nazwa bento'}
          defaultValue={'Wiosenna miska obfitości'} />
          {BentoStore.list.map( (item: any, i: number) => { 
                return (
                  <Bento key={i} bento={item.name} season={item.season}> </Bento>
                )
              }
            )
          }
      </DialogContent>
    </Dialog>
    )
  }

export default BentoDialog