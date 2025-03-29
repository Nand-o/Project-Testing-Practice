const capitalize = require('./capitalize')

test("Capitalize Works 1", () => {
    expect(capitalize('this is just a test')).toBe('This is just a test')
})

test("Capitalize Works 2", () => {
    expect(capitalize('123456')).toBe('123456')
})

test("Capitalize Works 3", () => {
    expect(capitalize('the Home Alone')).toBe('The Home Alone')
})