import React from 'react'
import { Slide, Dialog, DialogTitle, DialogContent } from '@material-ui/core'
import { TransitionProps } from '@material-ui/core/transitions'
import { BentoDialogPropsModel } from '../../models/BentoDialogPropsModel'
import BentoTextField from '../BentoTextField/BentoTextField'
import { BentoTextFieldPropsModel } from '../../models/BentoTextFieldPropsModel'
import { BentoFormService } from '../../services/BentoFormService'


const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const service = new BentoFormService()

function BentoDialog(props: BentoDialogPropsModel) {  

  const { onClose, open } = props
  
  function closeModal() {
    onClose('')
  }

  const forms: Array<BentoTextFieldPropsModel> = service.getBentoForm().textFields

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
        {/* <BentoTextField {...form} /> */}
        {forms.map( (item: any, i: number) => { 
              return (
                <BentoTextField key={i} {...item}> </BentoTextField>
              )
            }
          )
        }
      </DialogContent>
    </Dialog>
    )
  }

export default BentoDialog