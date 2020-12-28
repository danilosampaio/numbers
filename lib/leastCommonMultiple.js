const gdc = require('./greatCommonDivisor');
/**
 * It calculates the least common multiple.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
module.exports = function lcm(a, b) {
    return a * b / gdc(a, b);
}
