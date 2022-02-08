import { ChevronRight, ExpandMore } from '@mui/icons-material'
import { FC, useMemo } from 'react'

import { Item } from './Item'
import { TreeView } from '@mui/lab'
import { useData } from 'contexts'

export const Tree: FC = () => {
  const { childrenMap } = useData()

  const rootChildrenArray = useMemo(() => childrenMap.get(0) ?? [], [childrenMap])
  return (
    <TreeView
      aria-label="Tree Viewer"
      defaultCollapseIcon={<ExpandMore />}
      defaultExpandIcon={<ChevronRight />}
    >
      {rootChildrenArray.map(child => (
        <Item id={child} key={child} />
      ))}
    </TreeView>
  )
}