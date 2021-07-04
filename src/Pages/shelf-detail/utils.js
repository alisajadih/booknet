export const getMapNameToCategoryId = (data) =>
  Object.fromEntries(!!data ? data.map((item) => [[item.name], item.id]) : []);
