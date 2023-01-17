import { describe, expect, it } from "vitest";
import { twoSum } from "./index.js";

describe("测试", () => {
  it.each([
    [[2, 7, 11, 15], 9, [0, 1]],
    [[3, 2, 4], 6, [1, 2]],
    [[3, 3], 6, [0, 1]],
  ])("twoSum", (param1, param2, expected) => {
    expect(twoSum(param1, param2)).toEqual(expected);
  });
});
