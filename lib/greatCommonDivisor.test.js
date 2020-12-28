const gcd = require('./greatCommonDivisor');

test('great common divisor', () => {
    expect(gcd(12378, 3054)).toBe(6);
    expect(gcd(54, 24)).toBe(6);
    expect(gcd(84, 18)).toBe(6);
    expect(gcd(180, 48)).toBe(12);
    expect(gcd(12, 13)).toBe(1);
    expect(gcd(9, 3)).toBe(3);
});
