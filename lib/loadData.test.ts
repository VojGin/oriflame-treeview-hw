import { ChildrenMap, DataItem, ItemMap } from 'model'

import { loadDataFromDataItemArray } from './loadData'

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

describe('test loadData function', () => {
  it('loads data', () => {
    const { itemMap, childrenMap } = loadDataFromDataItemArray(dataItemArray)

    const customItemMap: ItemMap = new Map()
    customItemMap.set(5, five)
    customItemMap.set(10, ten)
    customItemMap.set(4, four)
    customItemMap.set(8, eight)

    expect(itemMap).toEqual(customItemMap)

    const customChildrenMap: ChildrenMap = new Map()
    customChildrenMap.set(0, [5, 4])
    customChildrenMap.set(5, [10, 8])

    expect(childrenMap).toEqual(customChildrenMap)
  })
})