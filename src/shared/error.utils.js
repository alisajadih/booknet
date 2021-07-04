export const convertErrorDataToStringValue = (error, type) => {
  return Object.entries(error).map(([key, value]) => ({
    field: key,
    error: {
      type,
      message: value[0],
    },
  }));
};
