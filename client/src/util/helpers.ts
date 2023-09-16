export const formatPercentage = (value: number) => {
  if (value > 0) {
    return "+" + value.toFixed(2) + "%";
  } else {
    return value.toFixed(2) + "%";
  }
};

export const getPercentageColor = (value: number) => {
  return value > 0 ? "rgb(63,137,124)" : "rgb(190,79,92)";
};
