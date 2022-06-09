import {
    makePet
} from './objects.js';

const test = QUnit.test;

QUnit.module('objects');

test('test works', (expect) => {
    expect.equal(makePet(), undefined);
});
