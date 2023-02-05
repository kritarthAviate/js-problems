function pathSatisfies(condition, path, object) {
  return condition(objectFromPath(object, path));
}

function objectFromPath(object, path) {
  if (path.length == 0) {
    return object;
  }
  let objPath = object[path.shift()];
  return objectFromPath(objPath, path);
}

export { pathSatisfies };
// const o = { x: [{ y: -1 }, { y: 1 }] };

// console.log(objectFromPath(o, ["x", 1, "y"]));
