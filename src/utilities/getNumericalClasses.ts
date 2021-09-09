/**
 * Get numerical classes
 * @param classes Array of classes as strings.
 * @return Array of classes as numbers.
 */

export default function getNumericalClasses(labels: string[]) {
  const categories = [...new Set(labels)];
  const result = [];
  for (const label of labels) {
    for (let j = 0; j < categories.length; j++) {
      if (label === categories[j]) result.push(j);
    }
  }
  return result;
}
