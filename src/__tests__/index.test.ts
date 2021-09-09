import * as iris from '..';

describe('Iris dataset', () => {
  it('Testing whole dataset', () => {
    const dataset = iris.getDataset();
    expect(dataset).toHaveLength(150);
    expect(dataset[0]).toStrictEqual([5.1, 3.5, 1.4, 0.2, 'setosa']);
  });

  it('Testing numeric values', () => {
    const numbers = iris.getNumbers();
    expect(numbers).toHaveLength(150);
    expect(numbers[0]).toStrictEqual([5.1, 3.5, 1.4, 0.2]);
  });

  it('Testing labels', () => {
    const classes = iris.getClasses();
    expect(classes).toHaveLength(150);
    expect(classes[0]).toStrictEqual('setosa');
  });

  it('Getting classes as numbers', () => {
    const classes = iris.getClassesAsNumber();
    expect(classes).toHaveLength(150);
    expect(classes[0]).toStrictEqual(0);
    expect(classes[50]).toStrictEqual(1);
    expect(classes[100]).toStrictEqual(2);
  });

  it('Distinc classes', () => {
    const distinctClasses = iris.getDistinctClasses();
    expect(distinctClasses).toStrictEqual([
      'setosa',
      'versicolor',
      'virginica',
    ]);
  });

  it('Testing CV sets', () => {
    const cvSets = iris.getCrossValidationSets(7, { idx: 0 });
    const cvSetsbyFolds = iris.getCrossValidationSets(7, {
      idx: 1,
      by: 'folds',
    });
    const cvSetsbyTrainTest = iris.getCrossValidationSets(5, {
      idx: 0,
      by: 'trainTest',
    });
    expect(cvSets).toHaveLength(7);
    expect(cvSetsbyFolds).toHaveLength(7);
    expect(cvSetsbyTrainTest).toHaveLength(5);
  });

  it('Testing maximum and minimum', () => {
    const cvSets = iris.getCrossValidationSets(7, { idx: 0 }) as number[][];
    const max: number = cvSets[0].reduce((acc: number, curr: number) =>
      Math.max(curr, acc),
    );
    const min: number = cvSets[0].reduce((acc: number, curr: number) =>
      Math.min(curr, acc),
    );
    expect(max).toStrictEqual(149);
    expect(min).toStrictEqual(0);
  });
});
