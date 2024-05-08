import { isArrayHasData } from "@/utils/is.js";

describe("Utils:is", () => {
  it("isArrayHasData", () => {
    expect(isArrayHasData("")).toBe(false);
    expect(isArrayHasData([])).toBe(false);
    expect(isArrayHasData([1])).toBe(true);
    expect(isArrayHasData([{ name: "张三" }])).toBe(true);
  });
});
