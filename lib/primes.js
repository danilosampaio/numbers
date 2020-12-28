function isPrime (n) {
    if (n < 2) return false;

    const sqrt = Math.ceil(Math.sqrt(n));
    for (let p = 2; p <= sqrt; p++) {
        if (n % p === 0 && p !== n) return false;
    }
    return true;
}

module.exports = {
    isPrime
}