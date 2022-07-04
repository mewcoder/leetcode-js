/**
<<<<<<< HEAD
 * @param {array} nums
 * @param {number} target
 * @return {array}
 */
export const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const other = target - nums[i];
    if (map.has(other)) {
      return [map.get(other), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [-1, -1];
=======
 * @param {number} param1
 * @param {number} param2
 * @return {number}
 */
export const twoSum = (param1, param2) => {
  // code
  return param1 + param2;
>>>>>>> 35011bd (feat: 🎸 完善CLI)
};
