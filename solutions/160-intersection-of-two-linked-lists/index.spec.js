import { describe, expect, it } from 'vitest';
import { intersectionOfTwoLinkedLists } from './index.js';

describe('测试', () => {
  it.each([
    [1, 1, 2],
    [1, 1, 2]
  ])('intersectionOfTwoLinkedLists', (param1, expected) => {
    expect(param1).toEqual(expected);
  });
});
