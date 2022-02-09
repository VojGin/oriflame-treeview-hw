import { FC, useCallback, useState } from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { ItemState } from 'model'
import { TextField } from '@mui/material'
import { useItem } from 'contexts'

export const EditDialog: FC = () => {
  const {
    itemState,
    handleClose,
    editItem,
    item,
  } = useItem()

  const [name, setName] = useState(item?.name ?? '')

  const editItemName = useCallback(() => {
    const newItem = Object.assign({}, item, {
      name,
    })
    editItem(newItem)
  }, [editItem, item, name])

  return (
    <div>
      <Dialog
        open={itemState === ItemState.EDIT}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        sx={{ minWidth: 400 }}
      >
        <DialogTitle id="alert-dialog-title">
          Item label change
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name of the element"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleClose()
              editItemName()
            }}
            autoFocus
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}