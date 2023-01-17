import { describe, expect, it } from "vitest";
import { mergeTwoSortedLists } from "./index.js";
import { createLinkedList } from "../../utils/index.js";

describe("测试", () => {
  it.each([
    [[1,2,3], [1,2,3], [1,1,2,2,3,3]],
    [[], [0], [0]],
  ])("mergeTwoSortedLists", (param1, param2, expected) => {
    console.log(createLinkedList(param1))
    expect(mergeTwoSortedLists(createLinkedList(param1), createLinkedList(param2))).toEqual(createLinkedList(expected));
  });
});
