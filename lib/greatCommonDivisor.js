/**
 * It calculates the greatest common divisor, using the Euclidian algorithm.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
module.exports = function gcd(a, b) {
    const quotient = Math.round(a / b);
    const remainder = a - quotient * b;
    return remainder === 0 ? b : Math.abs(gcd(b, remainder));
}
