const { nth, isTriangularNumber } = require('./triangularNumber');

test('triangular numbers - nth', () => {
    expect(nth(1)).toBe(1);
    expect(nth(2)).toBe(3);
    expect(nth(3)).toBe(6);
    expect(nth(4)).toBe(10);
    expect(nth(5)).toBe(15);
    expect(nth(6)).toBe(21);
});

test('triangular numbers - isTriangularNumber', () => {
    expect(isTriangularNumber(1)).toBe(true);
    expect(isTriangularNumber(3)).toBe(true);
    expect(isTriangularNumber(6)).toBe(true);
    expect(isTriangularNumber(10)).toBe(true);
    expect(isTriangularNumber(15)).toBe(true);
    expect(isTriangularNumber(21)).toBe(true);
});
