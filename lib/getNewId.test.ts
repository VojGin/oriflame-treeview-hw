import { DataItem } from 'model'
import { Map } from 'immutable'
import { getNewId } from './getNewId'
import { loadDataFromDataItemArray } from './loadData'

describe('test getNewId method', () => {
  const one: DataItem = {
    id: 1,
    name: "Item no. 1",
    parentId: 0
  }

  const two: DataItem = {
    id: 2,
    name: "Item no. 2",
    parentId: 1
  }

  const three: DataItem = {
    id: 3,
    name: "Item no. 3",
    parentId: 2
  }

  const ten: DataItem = {
    id: 10,
    name: "Item no. 10",
    parentId: 3
  }

  const dataItemFullArray = [
    one,
    two,
    three,
  ]

  const dataItemSparseArray = [
    one,
    two,
    ten,
  ]

  test('empty map', () => {
    expect(getNewId(Map())).toEqual(1)
  })

  test('full map', () => {
    const { itemMap } = loadDataFromDataItemArray(dataItemFullArray)
    expect(getNewId(itemMap)).toEqual(4)
  })

  test('sparse map', () => {
    const { itemMap } = loadDataFromDataItemArray(dataItemSparseArray)
    expect(getNewId(itemMap)).toEqual(3)
  })
})