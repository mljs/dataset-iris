# dataset-iris

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Iris flower data set.

## Installation

`$ npm i ml-dataset-iris`

## Usage

```js
import {
  getClasses,
  getClassesAsNumber,
  getCrossValidationSets,
  getDataset,
  getDistinctClasses,
  getNumbers,
} from 'ml-dataset-iris';

const dataset = getDataset();
console.log(dataset[0]) // [5.1, 3.5, 1.4, 0.2, 'setosa']

const numbers = getNumbers();
console.log(numbers[0]) // [5.1, 3.5, 1.4, 0.2]

const classes = getClasses();
console.log(classes[0]) // setosa

const classes = getClassesAsNumber();
console.log(classes[0]) // 0
console.log(classes[50]) // 1
console.log(classes[100]) // 2

const distinctClasses = iris.getDistinctClasses();
console.log(distinctClasses) // ['setosa', 'versicolor', 'virginica']

const cvSetsByFolds = iris.getCrossValidationSets(7, { idx: 1, by: 'folds' });
console.log(cvSetsByFolds.length) // 7

```

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/ml-dataset-iris.svg
[npm-url]: https://www.npmjs.com/package/ml-dataset-iris
[ci-image]: https://github.com/mljs/dataset-iris/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/mljs/dataset-iris/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/mljs/dataset-iris.svg
[codecov-url]: https://codecov.io/gh/mljs/dataset-iris
[download-image]: https://img.shields.io/npm/dm/ml-dataset-iris.svg
[download-url]: https://www.npmjs.com/package/ml-dataset-iris
