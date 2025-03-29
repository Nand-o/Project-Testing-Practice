const analyzeArray = require('./analyzeArray');

test("analyzeArray Test Like Example", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test("analyzeArray Test with Zero and Negative Numbers", () => {
    expect(analyzeArray([1, 8, 0, -4, 5, 6, -14, 12, 0, -5])).toEqual({ average: 0.9, min: -14, max: 12, length: 10 });
});