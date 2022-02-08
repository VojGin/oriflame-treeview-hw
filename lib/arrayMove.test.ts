import { arrayMoveImmutable } from 'lib'

describe('test arrayMoveImmutable method', () => {
  it('moves from first to last index', () => {
    expect(arrayMoveImmutable([1, 2, 3], 0, 2)).toEqual([2, 3, 1])
  })

  it('moves outside bounds', () => {
    expect(arrayMoveImmutable([1, 2, 3], 0, 5)).toEqual([2, 3, undefined, undefined, undefined, 1])
  })

  it('moves outside indexes inside the array', () => {
    expect(arrayMoveImmutable([1, 2, 3], 3, 2)).toEqual([1, 2, undefined, 3])
  })

  it('moves negative original index', () => {
    expect(arrayMoveImmutable([1, 2, 3], -1, 1)).toEqual([1, 3, 2])
  })

  it('moves negative new index', () => {
    expect(arrayMoveImmutable([1, 2, 3], 2, -2)).toEqual([1, 3, 2])
  })

  it('moves negative indexes', () => {
    expect(arrayMoveImmutable([1, 2, 3], -1, -2)).toEqual([1, 3, 2])
  })
})