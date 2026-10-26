class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let duplicateMap = new Map()
        for (let i =0; i < nums.length; i++){
            if (duplicateMap.has(nums[i])){
                return true;
            } else {
                duplicateMap.set(nums[i], 1)
            }
        }

        return false
    }
}
