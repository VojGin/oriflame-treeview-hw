import { ChildrenMap, ItemMap } from 'model'
import { Dispatch, FC, SetStateAction, createContext, useContext, useState } from 'react'

import { loadData } from 'lib'

const loadedData = loadData()

interface DataInterface {
  itemMap: ItemMap
  setItemMap: Dispatch<SetStateAction<ItemMap>>
  childrenMap: ChildrenMap
  setChildrenMap: Dispatch<SetStateAction<ChildrenMap>>
}

const defaultDataValue: DataInterface = {
  itemMap: loadedData.itemMap,
  setItemMap: () => { throw new Error('setItemMap is undefined') },
  childrenMap: loadedData.childrenMap,
  setChildrenMap: () => { throw new Error('setChildrenMap is undefined') },
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

  return (
    <DataContext.Provider
      value={{
        itemMap,
        setItemMap,
        childrenMap,
        setChildrenMap,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}