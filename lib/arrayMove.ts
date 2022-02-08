/**
 * Moves an item in array from one index to another.
 *
 * @export
 * @param {unknown[]} array
 * @param {number} oldIndex
 * @param {number} newIndex
 */
export function arrayMove(array: unknown[], oldIndex: number, newIndex: number) {
  while (oldIndex < 0) {
    oldIndex += array.length
  }

  while (newIndex < 0) {
    newIndex += array.length
  }

  if (newIndex >= array.length) {
    var k = newIndex - array.length + 1
    while (k--) {
      array.push(undefined)
    }
  }

  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0])
}
/**
 * Makes a copy of an array and moves an item in array from one index to another.
 *
 * @export
 * @param {unknown[]} array
 * @param {number} oldIndex
 * @param {number} newIndex
 * @returns
 */
export function arrayMoveImmutable(array: unknown[], oldIndex: number, newIndex: number) {
  const arrayCopy = [...array]
  arrayMove(arrayCopy, oldIndex, newIndex)
  return arrayCopy
}