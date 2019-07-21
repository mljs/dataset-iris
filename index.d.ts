declare module 'ml-iris-dataset' {
  export interface cvOptions {
    idx?: number;
    by?: 'folds' | 'trainTest'
  }

  export function getDataset(): Array<Array<number | string>>;

  export function getNumbers(): Array<Array<number>>;

  export function getClasses(): Array<string>;

  export function getDistinctClasses(): Array<string>;

  export function getCrossValidationSets(k: number, options?: cvOptions): Array<any>;
}
