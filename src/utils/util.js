export const handleError = (data, error) => {
  if (error) {
    throw error;
  }
  return data;
};
