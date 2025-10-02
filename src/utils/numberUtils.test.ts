import { safeDivide, sum } from './numberUtils'

describe('numberUtils', () => {
    test('safeDivide normal', () => {
        expect(safeDivide(6, 2)).toBe(3)
    })

    test('safeDivide with nulls', () => {
        expect(safeDivide(null, 2)).toBeNull()
        expect(safeDivide(1, 0)).toBeNull()
    })

    test('sum filters nulls', () => {
        expect(sum([1, 2, null, undefined, 3])).toBe(6)
    })
})
