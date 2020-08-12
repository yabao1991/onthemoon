const Find_Minimum_in_Rotated_Sorted_Array = {
    id: '0006',
    name: 'Find_Minimum_in_Rotated_Sorted_Array',
    refLink: [
        'https://www.jiuzhang.com/solution/find-minimum-in-rotated-sorted-array/',
        'https://www.lintcode.com/problem/find-minimum-in-rotated-sorted-array/description',
        'https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/solution/js-er-fen-cha-zhao-by-ignore_express/'
    ],
    level: 'Easy',
    tag: [
        'Binary Search',
    ],
    notes: ``,
    jsSolution: `
        // Suppose a sorted array in ascending order is rotated at some pivot unknown to you beforehand.

        // (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
        
        // Find the minimum element.
        
        // 在线评测地址: https://www.lintcode.com/problem/find-minimum-in-rotated-sorted-array/

        /**
         * @param nums: a rotated sorted array
         * @return: the minimum number in the array
         */
        const findMin = function (nums) {
            let low = 0,
            high = nums.length - 1,
            ans = Infinity;
        
            while (low <= high) {
                let mid = low + Math.floor((high - low) / 2);
                if (nums[low] <= nums[mid]) {
                    ans = Math.min(ans, nums[low]);
                    low = mid + 1;
                } else {
                    ans = Math.min(ans, nums[mid]);
                    high = mid - 1;
                }
            }
            return ans;
        }
    `,
}

export default Find_Minimum_in_Rotated_Sorted_Array