import { ChildrenMap, DataItem, ItemMap } from 'model'
import { Dispatch, FC, SetStateAction, createContext, useCallback, useContext, useState } from 'react'

import { loadData } from 'lib'

const loadedData = loadData()

interface DataInterface {
  itemMap: ItemMap
  setItemMap: Dispatch<SetStateAction<ItemMap>>
  childrenMap: ChildrenMap
  setChildrenMap: Dispatch<SetStateAction<ChildrenMap>>
  deleteItem: (id: number) => void
  addChild: (id: number, item: DataItem) => void
  editItem: (id: number, item: DataItem) => void
}

const defaultDataValue: DataInterface = {
  itemMap: loadedData.itemMap,
  setItemMap: () => { throw new Error('setItemMap is undefined') },
  childrenMap: loadedData.childrenMap,
  setChildrenMap: () => { throw new Error('setChildrenMap is undefined') },
  deleteItem: () => { throw new Error('deleteItem is undefined') },
  addChild: () => { throw new Error('addChild is undefined') },
  editItem: () => { throw new Error('editItem is undefined') },
}

/** Data Context */
export const DataContext = createContext<DataInterface>(defaultDataValue)
/** Data Context hook */
export const useData = (): DataInterface => useContext(DataContext)

/** Context provider for Data Context */
export const DataContextProvider: FC = ({
  children,
}) => {
  const [itemMap, setItemMap] = useState(loadedData.itemMap)
  const [childrenMap, setChildrenMap] = useState(loadedData.childrenMap)

  // TODO: Missing tests
  const deleteItem = useCallback((id: number) => {
    const getIdsToDelete = (id: number) => {
      let ids = [id]
      const childrenArray = childrenMap.get(id) ?? []
      for (const child of childrenArray) {
        ids = [...ids, ...getIdsToDelete(child)]
      }
      return ids
    }

    let newItemMap = itemMap
    let newChildrenMap = childrenMap
    for (const idToDelete of getIdsToDelete(id)) {
      newItemMap = newItemMap.delete(idToDelete)
      newChildrenMap = newChildrenMap.delete(idToDelete)
    }

    setItemMap(newItemMap)
    setChildrenMap(newChildrenMap)
  }, [childrenMap, itemMap])

  // TODO: Missing tests
  const addChild = useCallback((id: number, item: DataItem) => {
    const parent = childrenMap.get(id)
    if (!parent) throw new Error(`Parent with id ${id} not found`)

    const newParent = [...parent, item.id]

    const newItemMap = itemMap.set(item.id, item)
    const newChildrenMap = childrenMap.set(id, newParent).set(item.id, [])

    setItemMap(newItemMap)
    setChildrenMap(newChildrenMap)
  }, [childrenMap, itemMap])

  // TODO: Missing tests
  const editItem = useCallback((id: number, item: DataItem) => {
    setItemMap(itemMap.set(id, item))
  }, [itemMap])

  return (
    <DataContext.Provider
      value={{
        itemMap,
        setItemMap,
        childrenMap,
        setChildrenMap,
        deleteItem,
        addChild,
        editItem,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}