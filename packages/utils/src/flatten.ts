export function flatten<T>(array: T[]): T[] {
  const flattened = [] as T[];
  array.forEach((item) => {
    if (Array.isArray(item)) {
      flattened.push(...flatten(item));
    } else {
      flattened.push(item);
    }
  });
  return flattened;
}

export default flatten;
