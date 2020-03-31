// utilites for store
export const applyScope = (scope, types) =>
  Object.fromEntries(types.map((type) => [type, `${scope}/${type}`]));

// map util for selector
export function createMap(data) {
  const parsed = {};
  data.forEach((row) => {
    parsed[row.id] = row;
  });
  return parsed;
}
