class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for (const str of strs) {
            res += str.length + "#" + str
        }

        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i = 0

        console.log(str)

        while (i < str.length){
            let j = i
            while (str[j] != "#"){
                j++
            }
            const length = Number(str.slice(i,j))
            res.push(str.slice(j + 1, j + 1 + length))
            i = j + 1 + length
        }

        return res
    }
}
