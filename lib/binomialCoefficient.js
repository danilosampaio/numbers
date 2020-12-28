const factorial = require('./factorial');

/**
 * It calculates the binomial coefficient
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */
module.exports = function coefficient(n, k) {
    return factorial(n) / (factorial(k) * factorial(n - k));
}
