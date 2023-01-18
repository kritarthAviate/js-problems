import { bouncer } from "./bouncer";

describe("bouncer", () => {
  it("should remove falsy values", () => {
    const expectedResult = [9];
    const result = bouncer([false, null, 0, NaN, undefined, "", 9]);

    expect(result).toEqual(expectedResult);
  });
});
