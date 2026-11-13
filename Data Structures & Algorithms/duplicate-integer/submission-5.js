class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const m = new Map()
        for (let i = 0; i < nums.length; i++) {
            if (m.has(nums[i])) {
                return true
            } else {
                m.set(nums[i],1)
            }
        }

        return false
    }
}
