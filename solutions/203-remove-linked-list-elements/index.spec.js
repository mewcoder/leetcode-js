import { describe, expect, it } from "vitest";
import { removeLinkedListElements } from "./index.js";
import { createLinkedList } from "../../utils/index.js";

describe("测试", () => {
  it.each([
    [[1, 2, 6, 3, 4, 5, 6], 6, [1, 2, 3, 4, 5]],
    [[], 1, []],
    [[7, 7, 7, 7], 7, []],
  ])("removeLinkedListElements", (param1, param2, expected) => {
    expect(removeLinkedListElements(createLinkedList(param1), param2)).toEqual(
      createLinkedList(expected)
    );
  });
});
