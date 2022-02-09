import { ChildrenMap, DataItem, ItemMap } from 'model'

import { Map } from 'immutable'
import { loadDataFromDataItemArray } from './loadData'

describe('test loadData function', () => {
  const five: DataItem = {
    id: 5,
    name: "Item no. 5",
    parentId: 0
  }

  const ten: DataItem = {
    id: 10,
    name: "Item no. 10",
    parentId: 5
  }

  const four: DataItem = {
    id: 4,
    name: "Item no. 4",
    parentId: 0
  }

  const eight: DataItem = {
    id: 8,
    name: "Item no. 8",
    parentId: 5
  }

  const dataItemArray = [
    five,
    ten,
    four,
    eight,
  ]

  it('loads data', () => {
    const { itemMap, childrenMap } = loadDataFromDataItemArray(dataItemArray)

    let customItemMap: ItemMap = Map()
    customItemMap = customItemMap.set(5, five)
    customItemMap = customItemMap.set(10, ten)
    customItemMap = customItemMap.set(4, four)
    customItemMap = customItemMap.set(8, eight)

    expect(itemMap).toEqual(customItemMap)

    let customChildrenMap: ChildrenMap = Map()
    customChildrenMap = customChildrenMap.set(0, [5, 4])
    customChildrenMap = customChildrenMap.set(5, [10, 8])

    expect(childrenMap).toEqual(customChildrenMap)
  })
})