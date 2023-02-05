/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */

function permutateWithoutRepetitions(permutationOptions) {
  let result = [];

  permutations(permutationOptions, result);

  return result;
}

// export { permutateWithoutRepetitions };

function permutations(array, rsf = []) {
  if (array.length == 0) {
    console.log(rsf);
  }

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const roa = [...array.slice(0, i), ...array.slice(i + 1)];
    rsf.push(element);
    permutations(roa, rsf);
    rsf = [];
  }
}

console.log(permutateWithoutRepetitions(["A", "B", "C"]));
