# Numbers
> A library for math calculations. 

## Summary
- Binomial Coefficient
- Congruences
- Diophantine Equations
- Factorial
- Great common divisor
- Least common multiple
- Primes
- Triangular numbers


## Install
```sh
npm install @danilosampaio/numbers
```

## Binomial coefficient
> [Binomial coefficient](https://en.wikipedia.org/wiki/Binomial_coefficient)

### Usage
```js
const { binomialCoefficient } = require('@m4th/numbers');

// a = 4, b = 2
binomialCoefficient(4, 2));
// => 6

```

## Congruences
> [Congruences](https://en.wikibooks.org/wiki/Number_Theory/Congruences)

### Usage
```js
const { congruences } = require('@m4th/numbers');

// 3 ≡ 24 (mod 7)
congruences(3, 24, 7);
// => true

```

## Diophantine Equations
> [Diophantine Equations](https://en.wikipedia.org/wiki/Diophantine_equation)

### Usage
```js
const { diophantineEquation } = require('@m4th/numbers');

// 3x + 6y = 18
diophantineEquation.hasSolution(3, 6, 18);
// => true

// The nth solution for 172x + 20b = 1000 | x0 = 500, y0 = -4250, t = 1
diophantineEquation.nthSolution(172, 20, 1000, 500, -4250, 1))
// => [505, -4293]

```


## Factorial
> [Factorial](https://en.wikipedia.org/wiki/Factorial)

### Usage
```js
const { factorial } = require('@m4th/numbers');

// 5!
factorial(5);
// => 120

```


## Great common divisor
> [Greatest common divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor)

### Usage
```js
const { greatCommonDivisor } = require('@m4th/numbers');

// a = 12378, b = 3054
greatCommonDivisor(12378, 3054));
// => 6

```


## Least common multiple
> [Least common multiple](https://en.wikipedia.org/wiki/Least_common_multiple)

### Usage
```js
const { leastCommonMultiple } = require('@m4th/numbers');

// a = 4, b = 6
leastCommonMultiple(4, 6));
// => 12

```


## Primes
> [Primes](https://en.wikipedia.org/wiki/Prime_number)

### Usage
```js
const { primes } = require('@m4th/numbers');

// p = 5
primes.isPrime(5));
// => true

```



## Triangular numbers
> [Triangular number](https://en.wikipedia.org/wiki/Triangular_number)

### Usage
```js
const { triangularNumber } = require('@m4th/numbers');

// n = 6
triangularNumber.isTriangularNumber(6));
// => true

// The sixth triangular number
triangularNumber.nth(6));
// => 21

```


## License
MIT