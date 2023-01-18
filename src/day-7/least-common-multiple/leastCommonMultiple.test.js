import { leastCommonMultiple } from "./leastCommonMultiple";

describe("leastCommonMultiple", () => {
  it("should return correct LCM", () => {
    const expectedResult = 60;
    const result = leastCommonMultiple(15, 20);
    expect(result).toEqual(expectedResult);
  });
});
