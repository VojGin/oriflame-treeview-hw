/** DataItem type as it is parsed from the data.json */
export interface DataItem {
  id: number
  name: string
  parentId: number
}

/** Item type as it is used in the application */
export interface Item extends Omit<DataItem, 'parentId'> {
  id: number
  name: string
  parent: Item | RootItem
  children: Item[]
}

/** Root Item without a parent */
export type RootItem = Omit<Item, 'parent'>

/** Typeguard which decides Item type */
export function isRoot(item: Item | RootItem): item is RootItem {
  return typeof (item as Item).parent === 'undefined'
}

/** Typeguard which decides Item type */
export function isNotRoot(item: Item | RootItem): item is Item {
  return typeof (item as Item).parent !== 'undefined'
}