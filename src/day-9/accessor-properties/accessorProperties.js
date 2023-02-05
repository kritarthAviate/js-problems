function accessorProperties() {
  let value;
  let obj = {
    get number() {
      return (value >>> 0).toString(2);
    },
    set number(num) {
      value = +num;
    },
  };

  return obj;
}

export { accessorProperties };
