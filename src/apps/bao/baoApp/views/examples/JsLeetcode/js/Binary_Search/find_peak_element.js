const find_peak_element = {
    id: '0007',
    name: 'find_peak_element',
    refLink: [
        'https://www.lintcode.com/problem/find-peak-element/',
        'https://www.lintcode.com/problem/find-peak-element/description',
        'https://leetcode-cn.com/problems/find-peak-element/solution/'
    ],
    level: 'Easy',
    tag: [
        'Binary Search',
    ],
    notes: ``,
    jsSolution: `
        // There is an integer array which has the following features:

        // The numbers in adjacent positions are different.
        // A[0] < A[1] && A[A.length - 2] > A[A.length - 1].
        // We define a position P is a peak if:
        
        // A[P] > A[P-1] && A[P] > A[P+1]
        // Find a peak element in this array. Return the index of the peak.
        
        // 在线评测地址: https://www.lintcode.com/problem/find-peak-element/

        /**
         * @param {number[]} nums
         * @return {number}
         */
        var findPeakElement = function(nums = []) {
            const length = nums.length;
            let index = length - 1;
            
            for(let i = 0; i < length - 1; i++) {
                const item = nums[i];
                const after = nums[i + 1];

                if(item > after) {
                    return i;
                }
            }

            return index;
        };
    `,
}

export default find_peak_element