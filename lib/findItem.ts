import { Item, RootItem } from 'model'

/** Recursively finds an item with given ID and returns reference to it */
export function findItem(current: Item | RootItem, id: number): Item | RootItem {
  if (id === current.id) return current

  for (const child of current.children) {
    try {
      return findItem(child, id)
    } finally {
      continue
    }
  }

  throw new Error(`Item with such id (${id}) was not found in the structure`)
}