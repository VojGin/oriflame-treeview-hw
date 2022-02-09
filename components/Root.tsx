import { Box, Button } from '@mui/material'
import { FC, Fragment, useMemo } from 'react'
import { ItemContextProvider, useData, useItem } from 'contexts'

import { AddChildDialog } from './AddChildDialog'
import { Item } from './Item'
import { ItemState } from 'model'

export const Root: FC = () => {
  const { childrenMap } = useData()
  const { setItemState } = useItem()

  const rootChildrenArray = useMemo(() => childrenMap.get(0) ?? [], [childrenMap])

  return (
    <Fragment>
      {rootChildrenArray.map(child => (
        <ItemContextProvider id={child} key={child}>
          <Item id={child} key={child} />
        </ItemContextProvider>
      ))}
      <Box sx={{ p: 2 }}>
        <Button
          color="primary"
          variant="outlined"
          size="small"
          onClick={() => setItemState(ItemState.ADD)}
        >
          Add root child
        </Button>
      </Box>
      <AddChildDialog />
    </Fragment>
  )
}