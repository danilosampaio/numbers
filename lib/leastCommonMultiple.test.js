const lcm = require('./leastCommonMultiple');

test('great common divisor', () => {
    expect(lcm(4, 6)).toBe(12);
    expect(lcm(21, 6)).toBe(42);
    expect(lcm(3054, 12378)).toBe(6300402);
});
