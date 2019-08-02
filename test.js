'use strict';

const assert = require('assert');

const iris = require('.');

var dataset = iris.getDataset();
assert.strictEqual(dataset.length, 150);
assert.deepStrictEqual(dataset[0], [5.1,3.5,1.4,0.2,"setosa"]);

var numbers = iris.getNumbers();
assert.strictEqual(numbers.length, 150);
assert.deepStrictEqual(numbers[0], [5.1,3.5,1.4,0.2]);

var classes = iris.getClasses();
assert.strictEqual(classes.length, 150);
assert.strictEqual(classes[0], 'setosa');

var distinctClasses = iris.getDistinctClasses();
assert.deepStrictEqual(distinctClasses, ['setosa', 'versicolor', 'virginica']);

let cvSets = iris.getCrossValidationSets(7, {idx: 0});
assert.strictEqual(cvSets.length, 7);

let cvSetsbyFolds = iris.getCrossValidationSets(7, {idx: 1, by: 'folds'});
assert.strictEqual(cvSetsbyFolds.length, 7);

let cvSetsbyTrainTest = iris.getCrossValidationSets(5, {idx: 0, by: 'trainTest'});
assert.strictEqual(cvSetsbyTrainTest.length, 5);

let max = cvSets[0].reduce((acc, curr) => Math.max(curr, acc));
let min = cvSets[0].reduce((acc, curr) => Math.min(curr, acc));
assert.strictEqual(max, 149);
assert.strictEqual(min, 0);

