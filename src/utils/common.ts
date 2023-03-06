export function enumKeys<O extends object, K extends keyof O = keyof O>(obj: O): K[] {
  return Object.keys(obj).filter((k) => Number.isNaN(+k)) as K[];
}

export function getFormDirtyValues(dirtyFields: object | boolean, allValues: object): object {
  if (dirtyFields === true || Array.isArray(dirtyFields)) return allValues;
  return Object.fromEntries(
    Object.keys(dirtyFields).map((key) => [key, getFormDirtyValues(dirtyFields[key], allValues[key])]),
  );
}
