const factorial = require('./factorial');

test('factorial', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3628800);
    expect(factorial(15)).toBe(1307674368000);
});
