import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { FC } from 'react'
import { ItemState } from 'model'
import { useItem } from 'contexts'

export const DeleteDialog: FC = () => {
  const {
    itemState,
    handleClose,
    item,
    deleteItem,
  } = useItem()

  return (
    <div>
      <Dialog
        open={itemState === ItemState.DELETE}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ minWidth: 400 }}
      >
        <DialogTitle id="alert-dialog-title">
          Do you want to delete this item?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This will delete the selected item ({item?.name}) and all of its children.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleClose()
              deleteItem()
            }}
            autoFocus
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}