import { DataItem, Item, RootItem } from 'model'

import data from 'data/data.json'
import { findItem } from './findItem'

/** Loads data from DataItem array into interconnected tree structure */
export function loadDataFromDataItemArray(dataItemArray: DataItem[]) {
  const treeMap = new Map<number, DataItem[]>()

  for (const dataItem of dataItemArray) {
    const { parentId } = dataItem
    // initialize each parent with empty array of children
    if (!treeMap.has(parentId)) treeMap.set(parentId, [])

    // insert dataItem at the end of the children array
    const childrenArray = treeMap.get(parentId) || []
    const newChildrenArray = [...childrenArray, dataItem]
    treeMap.set(parentId, newChildrenArray)
  }

  const root: RootItem = {
    id: 0,
    name: 'Root',
    children: [],
  }

  const fillInChildren = (current: Item | RootItem) => {
    const treeMapArray = treeMap.get(current.id)
    // return if no children to add
    if (typeof treeMapArray === 'undefined') return

    const reference = findItem(current, current.id)

    // map children from DataItem to Item
    const childrenArray = treeMapArray.map(dataItem => {
      const { id, name } = dataItem
      const item: Item = {
        id,
        name,
        parent: reference,
        children: []
      }
      return item
    })

    reference.children = childrenArray

    // continue recursively
    for (const child of childrenArray) {
      fillInChildren(child)
    }
  }

  // console.log(treeMap)

  fillInChildren(root)

  // console.log(root)

  return root
}

/** Loads data from data/data.json file */
export function loadData() {
  return loadDataFromDataItemArray(data)
}