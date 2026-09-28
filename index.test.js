const { isPrime } = require('./index');
const assert = require('assert');

console.log(isPrime(2));
console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(1));

assert.strictEqual(isPrime(2), true);
assert.strictEqual(isPrime(3), true);
assert.strictEqual(isPrime(7), true);
assert.strictEqual(isPrime(10), false);
assert.strictEqual(isPrime(12), false);
assert.strictEqual(isPrime(1), false);