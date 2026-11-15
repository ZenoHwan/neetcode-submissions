class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = new Map();
        const freqBucket = Array.from({length: nums.length + 1}, () => [])

        for(const num of nums){
            countMap.set(num, (countMap.get(num) ?? 0) + 1)
        }

        for(const [index, value] of countMap.entries()){
            freqBucket[value].push(index)
        }

        let res = []
        for (let i = freqBucket.length -1; i > 0; i--){
            for(let n of freqBucket[i]){
                res.push(n)
            }

            if(res.length == k){
                return res
            }
        }
        
    }
}
