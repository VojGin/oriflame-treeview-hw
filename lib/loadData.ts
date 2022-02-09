import { DataItem } from 'model'
import { Map } from 'immutable'
import data from 'data/data.json'

/** Loads data from DataItem array into interconnected tree structure */
export function loadDataFromDataItemArray(dataItemArray: DataItem[]) {
  let itemMap = Map<number, DataItem>()
  let childrenMap = Map<number, number[]>()

  for (const dataItem of dataItemArray) {
    const { parentId, id } = dataItem
    itemMap = itemMap.set(id, dataItem)

    // insert dataItem at the end of the children array
    const childrenArray = childrenMap.get(parentId) ?? []
    const newChildrenArray = [...childrenArray, dataItem.id]
    childrenMap = childrenMap.set(parentId, newChildrenArray)
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