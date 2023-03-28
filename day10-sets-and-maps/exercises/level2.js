const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// Find a union b
const c = [...a,...b]
const aUnionB = new Set(c)
console.log(aUnionB)

// Find a intersection b
const setA = new Set(a)
const setB = new Set(b)
const d = a.filter((e) => setB.has(e))
const aIntersectionB = new Set(d)
console.log(aIntersectionB)

// Find a with b
const aWithB = new Set([...a,...b])
console.log(aWithB)
