const reverse = require('./reverseString')

test('Reverse String Check 1', () => {
    expect(reverse('Hello')).toBe('olleH')
})

test('Reverse String Check 2', () => {
    expect(reverse('12345')).toBe('54321')
})

test('Reverse String Check 3', () => {
    expect(reverse('Im just a man that want to learn about code for fun')).toBe('nuf rof edoc tuoba nrael ot tnaw taht nam a tsuj mI')
})