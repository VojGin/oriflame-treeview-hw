import { DataItem, ItemState } from 'model'
import { Dispatch, FC, SetStateAction, createContext, useCallback, useContext, useMemo, useState } from 'react'

import { useData } from 'contexts'

interface ItemContextInterface {
  itemState: ItemState
  setItemState: Dispatch<SetStateAction<ItemState>>
  item?: DataItem
  id: number
  childrenArray: number[]
  handleClose: () => void
  deleteItem: () => void
  addChild: (item: DataItem) => void
  editItem: (item: DataItem) => void
}

const defaultItemContextValue: ItemContextInterface = {
  itemState: ItemState.NONE,
  setItemState: () => { throw new Error('setItemState is undefined') },
  id: Number.NaN,
  childrenArray: [],
  handleClose: () => { throw new Error('handleClose is undefined') },
  deleteItem: () => { throw new Error('deleteItem is undefined') },
  addChild: () => { throw new Error('addChild is undefined') },
  editItem: () => { throw new Error('editItem is undefined') },
}

/** Item Context */
export const ItemContext = createContext<ItemContextInterface>(defaultItemContextValue)
/** Item Context hook */
export const useItem = (): ItemContextInterface => useContext(ItemContext)

/** Context provider for Item Context */
export const ItemContextProvider: FC<{
  id: number
}> = ({
  children,
  id,
}) => {
    const [itemState, setItemState] = useState(ItemState.NONE)
    const {
      itemMap,
      childrenMap,
      deleteItem: deleteParticularItem,
      addChild: addParticularChild,
      editItem: editParticularItem,
    } = useData()

    const item = useMemo(() => itemMap.get(id), [id, itemMap])
    const childrenArray = useMemo(() => childrenMap.get(id) ?? [], [childrenMap, id])

    const handleClose = useCallback(() => setItemState(ItemState.NONE), [])

    const deleteItem = useCallback(() => deleteParticularItem(id), [deleteParticularItem, id])

    const addChild = useCallback((item: DataItem) => addParticularChild(id, item), [addParticularChild, id])

    const editItem = useCallback((item: DataItem) => editParticularItem(id, item), [editParticularItem, id])

    return (
      <ItemContext.Provider
        value={{
          itemState,
          setItemState,
          item,
          id,
          childrenArray,
          handleClose,
          deleteItem,
          addChild,
          editItem,
        }}
      >
        {children}
      </ItemContext.Provider>
    )
  }