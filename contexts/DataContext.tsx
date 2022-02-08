import { FC, createContext, useContext } from 'react'

import { Item } from 'model'

interface DataInterface {
  root: Item
}

const defaultDataValue: DataInterface = {
}

/** Data Context */
export const DataContext = createContext<DataInterface>(defaultDataValue)
/** Data Context hook */
export const useData = (): DataInterface => useContext(DataContext)

/** Context provider for Data Context */
export const DataContextProvider: FC = ({
  children,
}) => {

  return (
    <DataContext.Provider
      value={{
      }}
    >
      {children}
    </DataContext.Provider>
  )
}