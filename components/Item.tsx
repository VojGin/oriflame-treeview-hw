import { FC, useMemo } from 'react'

import { TreeItem } from '@mui/lab'
import { useData } from 'contexts'

export const Item: FC<{
  id: number
}> = ({
  id,
}) => {
    const {
      itemMap,
      childrenMap,
    } = useData()

    const item = useMemo(() => itemMap.get(id), [id, itemMap])
    const childrenArray = useMemo(() => childrenMap.get(id) ?? [], [childrenMap, id])

    if (!item) return null

    return (
      <TreeItem nodeId={id.toString()} label={item.name}>
        {childrenArray.map(child => (
          <Item id={child} key={child} />
        ))}
      </TreeItem>
    )
  }