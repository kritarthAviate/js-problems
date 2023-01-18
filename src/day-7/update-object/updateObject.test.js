import { updateObject } from "./updateObject";
describe("updateObject", () => {
  it("should return the correct updated array", () => {
    const expectedResult = ["a", "_", "c"];
    const result = updateObject(1, "_", ["a", "b", "c"]);
    expect(result).toEqual(expectedResult);
  });

  it("should return the correct updated array", () => {
    const expectedResult = ["a", "b", "_"];
    const result = updateObject(-1, "_", ["a", "b", "c"]);
    expect(result).toEqual(expectedResult);
  });

  it("should return the correct updated array", () => {
    const expectedResult = ["b", "a"];
    const result = updateObject(-1, "a", ["b", "c"]);
    expect(result).toEqual(expectedResult);
  });

  it("should return the correct updated array", () => {
    const expectedResult = ["a", "c"];
    const result = updateObject(0, "a", ["b", "c"]);
    expect(result).toEqual(expectedResult);
  });
});
