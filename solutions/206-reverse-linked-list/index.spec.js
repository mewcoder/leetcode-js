import { describe, expect, it } from "vitest";
import { reverseLinkedList } from "./index.js";
import { createLinkedList } from "../../utils/index.js";

describe("测试", () => {
  it.each([
    [
      [1, 2, 3, 4, 5],
      [5, 4, 3, 2, 1],
    ],
    [
      [1, 2],
      [2, 1],
    ],
    [[],[]]
  ])("reverseLinkedList", (param, expected) => {
    expect(reverseLinkedList(createLinkedList(param))).toEqual(
      createLinkedList(expected)
    );
  });
});
// [
//   [[1, 2, 6, 3, 4, 5, 6], 6, [1, 2, 3, 4, 5]],
//   [[], 1, []],
//   [[7, 7, 7, 7], 7, []],
// ]
