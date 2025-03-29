const calculator = require('./calculator')

// Sum Section

test('Calculator Sum Test 1', () => {
    expect(calculator.add(2, 5)).toBe(7)
})

test('Calculator Sum Test 2', () => {
    expect(calculator.add(-2, 5)).toBe(3)
})

test('Calculator Sum Test 3', () => {
    expect(calculator.add(100000, 1)).toBe(100001)
})

// Substract Section

test('Calculator Substract Test 1', () => {
    expect(calculator.substract(10, 3)).toBe(7)
})

test('Calculator Substract Test 2', () => {
    expect(calculator.substract(69, 0)).toBe(69)
})

test('Calculator Substract Test 3', () => {
    expect(calculator.substract(11, 12)).toBe(-1)
})

// Divide Section

test('Calculator Divide Test 1', () => {
    expect(calculator.divide(10, 2)).toBe(5)
})

test('Calculator Divide Test 2', () => {
    expect(calculator.divide(1, 2)).toBe(0.5)
})

test('Calculator Divide Test 3', () => {
    expect(calculator.divide(-70, -7)).toBe(10)
})

// Multiply Section

test('Calculator Multiply Test 1', () => {
    expect(calculator.multiply(10, 10)).toBe(100)
})

test('Calculator Multiply Test 2', () => {
    expect(calculator.multiply(6, -2)).toBe(-12)
})

test('Calculator Multiply Test 3', () => {
    expect(calculator.multiply(-7, -10)).toBe(70)
})