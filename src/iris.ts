import cvSetsK5 from './data/cvSetsK5.json';
import cvSetsK7 from './data/cvSetsK7.json';
import raw from './data/iris.json';
import getNumericalClasses from './utilities/getNumericalClasses';

const dataset = raw as [number, number, number, number, string][];

export function getDataset(): (number | string)[][] {
  return dataset.slice();
}

export function getNumbers(): number[][] {
  return dataset.map((sample) => sample.slice(0, 4) as number[]);
}

export function getClasses(): string[] {
  return dataset.map((sample) => sample[4]);
}

export function getClassesAsNumber(): number[] {
  const classes = dataset.map((sample) => sample[4]);
  return getNumericalClasses(classes);
}

export function getDistinctClasses(): [string, string, string] {
  return ['setosa', 'versicolor', 'virginica'];
}

export function getCrossValidationSets(k: 5 | 7, options: cvOptions = {}) {
  const { idx = 0, by = 'folds' } = options;
  if (k !== 7 && k !== 5) {
    throw new Error(`k must be 7 or 5`);
  }

  const res: number[][] =
    k === 7 ? cvSetsK7[idx] : k === 5 ? cvSetsK5[idx] : [];

  if (by === 'folds') {
    return res;
  } else if (by === 'trainTest') {
    const folds: { testIndex: number[]; trainIndex: number[] }[] = [];
    for (const trainIndex of res) {
      const testIndex = [];
      for (let j = 0; j < 150; j++) {
        if (!trainIndex.includes(j)) {
          testIndex.push(j);
        }
      }
      folds.push({ testIndex, trainIndex });
    }
    return folds;
  } else {
    throw new Error(`unknown "by" option: ${by}`);
  }
}

interface cvOptions {
  idx?: number;
  by?: string;
}
