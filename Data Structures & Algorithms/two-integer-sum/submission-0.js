class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const m = new Map();
        let twoSum = []

        for (const [index, value] of nums.entries()) {
             const diff = target - value;
             if (m.has(diff)){
                twoSum = [m.get(diff), index]
                return twoSum
             }
             m.set(value, index)
        }

        return twoSum
    }
}
