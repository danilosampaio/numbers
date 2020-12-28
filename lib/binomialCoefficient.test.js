const binomialCoefficient = require('./binomialCoefficient');

test('binomial coefficient', () => {
    expect(binomialCoefficient(4, 2)).toBe(6);
    expect(binomialCoefficient(0, 1)).toBe(1);
    expect(binomialCoefficient(7, 5)).toBe(21);
    expect(binomialCoefficient(11, 2)).toBe(55);
});
