const { hasSolution, nthSolution } = require('./diophantineEquation');

test('diophantine equiation - hasSolution', () => {
    expect(hasSolution(3, 6, 18)).toBe(true);
    expect(hasSolution(2, 10, 17)).toBe(false);
});

test('diophantine equiation - nthSolution', () => {
    expect(nthSolution(172, 20, 1000, 500, -4250, 1)).toEqual([505, -4293]);
    expect(nthSolution(172, 20, 1000, 500, -4250, 2)).toEqual([510, -4336]);
});
