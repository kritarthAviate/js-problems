const animalSort = (animals) => {
  return animals.sort((a, b) => {
    if (a.numberOfLegs > b.numberOfLegs) return 1;
    if (a.numberOfLegs < b.numberOfLegs) return -1;
    else {
      return a.name.localeCompare(b.name);
    }
  });
};

export { animalSort };
