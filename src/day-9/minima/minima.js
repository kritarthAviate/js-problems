function minima(k, arr) {
  return arr.sort((a, b) => a - b).slice(0, k);
}
export { minima };
