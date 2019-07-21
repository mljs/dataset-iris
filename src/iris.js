'use strict';

const dataset = require('./iris.json');
const cvSetsK7 = require('./cvSetsK7.json');
const cvSetsK5 = require('./cvSetsK5.json');

/**
 * retrieve the full dataset
 * @return {Array} - dataset with features and labels
 */
exports.getDataset = function () {
    return dataset.slice();
};

/**
 * retrieve only the features
 * @return {Array} - an array with the features
 */
exports.getNumbers = function () {
    return dataset.map(d => d.slice(0, 4));
};

/**
 * retrieve the labels (or classes)
 * @return {Array} - an array with labels as character
 */
exports.getClasses = function () {
    return dataset.map(d => d[4]);
};

/**
 * retrieve the labels tags (distinct classes)
 * @return {Array} - an array with labels tags
 */
exports.getDistinctClasses = function () {
    return ['setosa', 'versicolor', 'virginica'];
};

/**
 * retrieve cross-validation sets for testing purpose 
 * this is usefull to test supervised algorithms
 * @param {Number} k - the number of folds
 * @param {Object} [options]
 * @param {Number} [options.idx=0] - index of the cv sets, either 0 or 1
 * @param {Number} [options.by='folds'] - choose the format: either 'folds' or 'trainTest'
 */
exports.getCrossValidationSets = function(k, options) {
    const {idx = 0,
    by = 'folds'} = options;
    var res;
    k == 7 ? res = cvSetsK7[idx] : [];
    k == 5 ? res = cvSetsK5[idx] : [];

switch(by) {
    case 'folds': {
      res = res.map((x) => x.map((y) => y - 1));
    }
    break;
    case 'trainTest': {
      res = res.map((x) => x.map((y) => y - 1));
      let folds = [];
      for (let cv of res) {
        let testCv = [];
        for (let j = 0; j < 150; j++) {
          if (!cv.includes(j)) {
            testCv.push(j);
          }
        }
        folds.push({ testIndex: testCv, trainIndex: cv });
      }
      res = folds;
    }
  }
    return res;
}
