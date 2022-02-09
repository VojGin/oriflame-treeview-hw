import { DataItem, ItemState } from 'model'
import { FC, useCallback, useState } from 'react'
import { useData, useItem } from 'contexts'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { TextField } from '@mui/material'
import { getNewId } from 'lib'

export const AddChildDialog: FC = () => {
  const {
    itemState,
    handleClose,
    addChild,
    id,
  } = useItem()

  const {
    itemMap,
  } = useData()

  const [name, setName] = useState('')

  const addItem = useCallback(() => {
    const newItem: DataItem = {
      parentId: id,
      name,
      id: getNewId(itemMap),
    }

    addChild(newItem)
  }, [addChild, id, itemMap, name])

  return (
    <div>
      <Dialog
        open={itemState === ItemState.ADD}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        sx={{ minWidth: 400 }}
      >
        <DialogTitle id="alert-dialog-title">
          Add item
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
              addItem()
            }}
            autoFocus
            color="primary"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}