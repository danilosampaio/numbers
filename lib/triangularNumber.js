const binomialCoefficient = require('./binomialCoefficient');
/**
 * It calculates the nth tringular number
 * @param {number} n
 * @returns {number}
 */
function nth(n) {
    return binomialCoefficient(n + 1, 2);
}

/**
 * If `n` is a tringular number, it will return `true`.
 * @param {number} n 
 */
function isTriangularNumber(n) {
    const perfectSquare = 8 * n + 1;
    return Math.sqrt(perfectSquare) % 1 === 0;
}

module.exports = {
    nth,
    isTriangularNumber
}
