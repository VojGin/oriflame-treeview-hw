import { DataItem } from 'model'
import data from 'data/data.json'

/** Loads data from DataItem array into interconnected tree structure */
export function loadDataFromDataItemArray(dataItemArray: DataItem[]) {
  const itemMap = new Map<number, DataItem>()
  const childrenMap = new Map<number, number[]>()

  for (const dataItem of dataItemArray) {
    const { parentId, id } = dataItem
    itemMap.set(id, dataItem)

    // insert dataItem at the end of the children array
    const childrenArray = childrenMap.get(parentId) || []
    const newChildrenArray = [...childrenArray, dataItem.id]
    childrenMap.set(parentId, newChildrenArray)
  }

  const result = {
    itemMap,
    childrenMap,
  }

  return result
}

/** Loads data from data/data.json file */
export function loadData() {
  return loadDataFromDataItemArray(data)
}