const congruences = require('./congruences');

test('congruences', () => {
    expect(congruences(3, 24, 7)).toBe(true);
    expect(congruences(-31, 11, 7)).toBe(true);
    expect(congruences(-15, -64, 7)).toBe(true);
    expect(congruences(25, 12, 7)).toBe(false);
});