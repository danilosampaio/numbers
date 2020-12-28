/**
 * It calculates the n! (n factorial)
 * @param {number} n
 * @returns {number}
 */
module.exports = function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
