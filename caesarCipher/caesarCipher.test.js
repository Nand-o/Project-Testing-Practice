const caesarCipher = require('./caesarCipher')

test('Caesar Cipher Shift 3 Test', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
})

test('Caesar Cipher Shift 5 Test', () => {
    expect(caesarCipher('HeLLo', 5)).toBe('MjQQt')
})

test('Caesar Cipher Shift 7 Test', () => {
    expect(caesarCipher('HeLLo', 7)).toBe('OlSSv')
})