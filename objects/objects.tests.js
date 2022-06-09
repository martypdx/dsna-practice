import {
    makePet,
    formatWork,
    formatRevenge,
} from './objects.js';

const test = QUnit.test;

QUnit.module('objects');

test('test works', (expect) => {
    const actual = makePet(
        'felix',
        'cat',
        6,
        'tuna',
        ['feather chaser', 'laser pointer', 'ball of yarn']
    );

    expect.deepEqual(actual, {
        name: 'felix',
        type: 'cat',
        age: 6,
        food: 'tuna',
        toys: ['feather chaser', 'laser pointer', 'ball of yarn']
    });
});

test('transforms book data', expect => {
    const actual = formatWork({
        author: {
            last: 'wells',
            first: 'h.g.'
        },
        book: {
            title: 'war of the worlds',
            genre: 'scifi',
            words: 312000
        }
    });

    expect.deepEqual(actual, {
        work: 'war of the worlds',
        writer: 'h.g. wells'
    });
});

test('revenge of transforms book data', (expect) => {
    const actual = formatRevenge({
        work: 'war of the worlds',
        writer: 'h.g. wells'
    });

    expect.deepEqual(actual, {
        author: {
            last: 'wells',
            first: 'h.g.'
        },
        book: {
            title: 'war of the worlds',
        }
    });
});