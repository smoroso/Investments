export const safeDivide = (
    a: number | null | undefined,
    b: number | null | undefined
): number | null => {
    // guard clauses: return null for invalid inputs
    if (a == null) return null
    if (b == null) return null
    if (b === 0) return null
    return a / b
}

export const sum = (numbers: Array<number | null | undefined>): number =>
    numbers.filter((n): n is number => typeof n === 'number').reduce((acc, v) => acc + v, 0)
