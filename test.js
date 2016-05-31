'use strict';

const assert = require('assert');

const iris = require('.');

var dataset = iris.getDataset();
assert.strictEqual(dataset.length, 150);
assert.strictEqual(dataset[0].length, 5);

var numbers = iris.getNumbers();
assert.strictEqual(numbers.length, 150);
assert.strictEqual(numbers[0].length, 4);
for (var i = 0; i < numbers[0].length; i++) {
    assert.strictEqual(typeof numbers[0][i], 'number');
}

var classes = iris.getClasses();
assert.strictEqual(classes.length, 150);
assert.strictEqual(classes[0], 'setosa');

var distinctClasses = iris.getDistinctClasses();
assert.deepStrictEqual(distinctClasses, ['setosa', 'versicolor', 'virginica']);
