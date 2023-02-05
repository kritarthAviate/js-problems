import { accessorProperties } from "./accessorProperties";

describe("Template Test", () => {
  test("Template Test", () => {
    const obj = accessorProperties();
    obj.number = 36;
    expect(obj.number).toBe("100100");
  });
});
