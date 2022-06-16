import {
    takeArrayAndReturnLength,
    getThirdItem,
    firstKeyLastValue,
} from './tdd-review.js';

const test = QUnit.test;

QUnit.module('tdd-review');

// write a function that takes an array and returns the length of that array

test('takes an array and returns the length of that array', (expect) => {
    // Arrange: what goes in and out of the gumball machine
    const array = [];
    const expected = 0;

    // Act: turn the gumball crank at store what comes out
    const actual = takeArrayAndReturnLength(array);

    // Assert: did the gumball machine give us what we expected?
    expect.equal(actual, expected);
});

// Write a function that takes an array, and returns the 3rd item in the array

test('returns 3rd item in an array', (expect) => {
    // Arrange: what goes in and out of the gumball machine
    // in:
    const array = [23, 1, 33, 77];
    // out:
    const expected = 33;

    // Act: turn the gumball crank at store what comes out
    const actual = getThirdItem(array);

    // Assert: did the gumball machine give us what we expected?
    expect.equal(actual, expected);
});

test('returns 3rd item in an array is empty', (expect) => {
    // Arrange: what goes in and out of the gumball machine
    // in:
    const array = [23, 1];
    // out:
    const expected = 'empty';

    // Act: turn the gumball crank at store what comes out
    const actual = getThirdItem(array);

    // Assert: did the gumball machine give us what we expected?
    expect.equal(actual, expected);
});

test('Object keys returns array of keys', (expect) => {
    const cat = {
        name: 'duchess',
        type: 'persian',
    };
    const expected = ['name', 'type'];

    const keys = Object.keys(cat);

    expect.deepEqual(keys, expected);

    expect.equal(keys[0], 'name');

    const lastKey = keys[keys.length - 1];
    expect.equal(lastKey, 'type');

    expect.equal(cat[lastKey], 'persian');
});

test('first key, last value', (expect) => {
    // Arrange, Act, Assert
    const input = {
        name: 'felix',
        type: 'cat',
        food: 'tuna',
        age: 6,
    };

    const expected = {
        firstKey: 'name',
        lastValue: 6
    };

    const actual = firstKeyLastValue(input);

    expect.deepEqual(actual, expected);


});