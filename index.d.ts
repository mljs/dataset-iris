declare module 'ml-iris-dataset' {
  export interface cvOptions {
    idx?: number;
    by?: 'folds' | 'trainTest'
  }

  export function getDataset()
  
  export function getNumbers()

  export function getClasses()

  export function getDistinctClasses()

  export function getCrossValidationSets(k: number, options?: cvOptions): array;
}
