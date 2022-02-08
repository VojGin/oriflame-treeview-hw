import { Item, RootItem } from 'model'

import { loadDataFromDataItemArray } from './loadData'

const dataItemArray = [
  {
    "id": 5,
    "name": "Item no. 5",
    "parentId": 0
  },
  {
    "id": 10,
    "name": "Item no. 10",
    "parentId": 5
  },
  {
    "id": 4,
    "name": "Item no. 4",
    "parentId": 0
  },
  {
    "id": 8,
    "name": "Item no. 8",
    "parentId": 5
  }
]

const root: RootItem = {
  id: 0,
  name: 'Root',
  children: [],
}

const five: Item = {
  id: 5,
  name: "Item no. 5",
  parent: root,
  children: [],
}

const four: Item = {
  id: 4,
  name: "Item no. 4",
  parent: root,
  children: [],
}

const ten: Item = {
  id: 10,
  name: "Item no. 10",
  parent: five,
  children: [],
}


const eight: Item = {
  id: 10,
  name: "Item no. 8",
  parent: five,
  children: [],
}

root.children = [five, four]
five.children = [ten, eight]

describe('test loadData function', () => {
  it('loads data', () => {
    expect(loadDataFromDataItemArray(dataItemArray)).toEqual(root)
  })
})