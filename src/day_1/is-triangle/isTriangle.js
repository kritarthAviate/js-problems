export const isTriangle = (a, b, c) => {
  return a + b > c && a + c > b && b + c > a;
};
