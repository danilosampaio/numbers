const gcd = require('./greatCommonDivisor');

/**
 * It returns true if the linear diophantine equation has a solution
 * form: ax + by = c
 * 
 * @param {number} a 
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */
function hasSolution (a, b, c) {
    const d = gcd(a, b);
    return c % d === 0;
}

function nthSolution (a, b, c, x0, y0, t) {
    if (!hasSolution(a, b, c)) return null;
    
    const d = gcd(a, b);
    const x = x0 + (b / d) * t;
    const y = y0 - (a / d) * t;
    
    return [x, y];
}

module.exports = {
    hasSolution,
    nthSolution
}
