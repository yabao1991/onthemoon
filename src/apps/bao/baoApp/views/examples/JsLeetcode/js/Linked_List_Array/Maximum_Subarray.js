const Maximum_Subarray  = {
    id: '0049',
    name: 'Maximum_Subarray ', 
    refLink: [
        'https://www.jiuzhang.com/solution/maximum-subarray/#tag-highlight-lang-javascript',
        'https://www.lintcode.com/problem/maximum-subarray/description',

    ],
    level: 'Hard',
    tag: [],
    notes: ``,
    jsSolution: `
        // Given an array of integers, find a contiguous subarray which has the largest sum.

        // 在线评测地址: https://www.lintcode.com/problem/maximum-subarray/
        
        const maxSubArray = function (nums) {
            if (nums === null || nums.length === 0) {
                return 0;
            }
            var maxSum = nums[0], minSum = 0, sum = 0;
            var i;
            for (i = 0; i < nums.length; i++) {
                sum += nums[i];
                if (sum - minSum > maxSum) {
                    maxSum = sum - minSum;
                }
                if (sum < minSum) {
                    minSum = sum;
                }
            }
            return maxSum;
        }
    `
}

export default Maximum_Subarray 
