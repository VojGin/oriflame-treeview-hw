import { Button, Grid } from '@mui/material'
import { ItemContextProvider, useItem } from 'contexts'

import { AddChildDialog } from './AddChildDialog'
import { Box } from '@mui/system'
import { DeleteDialog } from './DeleteDialog'
import { EditDialog } from './EditDialog'
import { FC } from 'react'
import { ItemState } from 'model'
import { TreeItem } from '@mui/lab'

export const Item: FC<{
  id: number
}> = ({
  id,
}) => {
    const {
      item,
      childrenArray,
      setItemState,
    } = useItem()

    if (!item) return null

    return (
      <TreeItem nodeId={id.toString()} label={item.name}>
        <Box sx={{ p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs="auto">
              <Button
                color="error"
                variant="outlined"
                size="small"
                onClick={() => setItemState(ItemState.DELETE)}
              >
                Delete
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Button
                color="info"
                variant="outlined"
                size="small"
                onClick={() => setItemState(ItemState.EDIT)}
              >
                Edit
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Button
                color="primary"
                variant="outlined"
                size="small"
                onClick={() => setItemState(ItemState.ADD)}
              >
                Add child
              </Button>
            </Grid>
          </Grid>
        </Box>
        <DeleteDialog />
        <EditDialog />
        <AddChildDialog />
        {childrenArray.map(child => (
          <ItemContextProvider id={child} key={child}>
            <Item id={child} key={child} />
          </ItemContextProvider>
        ))}
      </TreeItem>
    )
  }