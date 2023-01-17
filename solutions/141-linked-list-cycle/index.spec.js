import { describe, expect, it } from 'vitest';
import { linkedListCycle } from './index.js';
import { createLinkedList } from '../../utils/index.js';

describe('测试', () => {
  it.each([
    [1, 1, 2],
    [1, 1, 3]
  ])('linkedListCycle', (param1, expected) => {
    expect(param1).toEqual(expected);
  });
});
