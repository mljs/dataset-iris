declare module 'ml-dataset-iris' {
  export interface cvOptions {
    /**
     * Index of the cv sets. Either 0 or 1.
     * @default `0`
     */
    idx?: 0 | 1;
    /**
     * Choose the format: either 'folds' or 'trainTest'
     * @default `'folds'`
     */
    by?: 'folds' | 'trainTest';
  }

  /**
   * Retrieve the full dataset.
   * @returns - Dataset with features and labels.
   */
  export function getDataset(): Array<Array<number | string>>;

  /**
   * Retrieve only the features.
   * @returns - An array with the features.
   */
  export function getNumbers(): Array<Array<number>>;

  /**
   * Retrieve the labels (or classes).
   * @returns - An array with the labels as strings.
   */
  export function getClasses(): Array<string>;

  /**
   * Retrieve the labels tags (distinct classes).
   * @returns - An array with labels tags.
   */
  export function getDistinctClasses(): Array<string>;

  /**
   * Retrieve cross-validation sets for testing purpose.
   * This is useful to test supervised algorithms.
   * @param k - The number of folds.
   * @param options
   */
  export function getCrossValidationSets(
    k: 5 | 7,
    options?: cvOptions,
  ): Array<any>;
}
