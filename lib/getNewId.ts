import { ItemMap } from 'model'

/** Returns lowest possible integer not present in given itemMap */
export function getNewId(itemMap: ItemMap) {
  if (itemMap.size === 0) return 1

  const ids = Array.from(itemMap.keys()).sort((a, b) => a - b)
  let current = ids[0]

  for (const id of ids) {
    if (current !== id) return current
    current++
  }

  return ids[ids.length - 1] + 1
}