import { ChevronRight, ExpandMore } from '@mui/icons-material'

import { FC } from 'react'
import { ItemContextProvider } from 'contexts'
import { Root } from './Root'
import { TreeView } from '@mui/lab'

export const Tree: FC = () => {
  return (
    <TreeView
      aria-label="Tree Viewer"
      defaultCollapseIcon={<ExpandMore />}
      defaultExpandIcon={<ChevronRight />}
    >
      <ItemContextProvider id={0}>
        <Root />
      </ItemContextProvider>
    </TreeView>
  )
}