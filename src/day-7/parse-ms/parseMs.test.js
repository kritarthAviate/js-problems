import { parseMs } from "./parseMs";

describe("parseMs", () => {
  it("should return correct values", () => {
    const expectedResult = {
      days: 15,
      hours: 11,
      minutes: 23,
      seconds: 20,
      milliseconds: 1,
      microseconds: 0,
      nanoseconds: 0,
    };
    const result = parseMs(1337000001);

    expect(result).toEqual(expectedResult);
  });
});
