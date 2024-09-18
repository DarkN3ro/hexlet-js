/* eslint-disable import/extensions */
import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Function work is not normal');
}

if (capitalize('') !== '') {
  throw new Error('Function work is not normal');
}

console.log('All test Ok!');
