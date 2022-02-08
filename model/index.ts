/** DataItem type as it is parsed from the data.json */
export interface DataItem {
  id: number
  name: string
  parentId: number
}

/** A map of all items */
export type ItemMap = Map<number, DataItem>

/** A map of children for certain item */
export type ChildrenMap = Map<number, number[]>