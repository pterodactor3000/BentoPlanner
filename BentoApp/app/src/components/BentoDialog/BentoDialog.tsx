import React from 'react'
import { Typography, Slide, Dialog, DialogTitle, DialogContent } from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'
import { BentoDialogPropsModel } from '../../models/BentoDialogPropsModel'
import BentoTextField from '../BentoTextField/BentoTextField';
import { BentoTextFieldPropsModel } from '../../models/BentoTextFieldPropsModel';


const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

function BentoDialog(props: BentoDialogPropsModel) {  

  const { onClose, open } = props
  
  function closeModal() {
    onClose('')
  }

  // const forms

  const form: BentoTextFieldPropsModel = { 
    disabled: false,
    type: 'text',
    id: 'bento-name',
    label: 'Nazwa bento',
    defaultValue: 'Wiosenna miska obfitości',
    multiline: true
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
        <BentoTextField {...form} />
          {/* {BentoStore.list.map( (item: any, i: number) => { 
                return (
                  <Bento key={i} bento={item.name} season={item.season}> </Bento>
                )
              }
            )
          } */}
      </DialogContent>
    </Dialog>
    )
  }

export default BentoDialog