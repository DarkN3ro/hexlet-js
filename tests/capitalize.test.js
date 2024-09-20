/* eslint-disable import/extensions */
import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

assert(capitalize('hello') === 'Hello');
assert(capitalize('') === '');

/* manual statement
if (capitalize('hello') !== 'Hello') {
  throw new Error('Function work is not normal');
}

if (capitalize('') !== '') {
  throw new Error('Function work is not normal');
}
*/
console.log('All test Ok!');
