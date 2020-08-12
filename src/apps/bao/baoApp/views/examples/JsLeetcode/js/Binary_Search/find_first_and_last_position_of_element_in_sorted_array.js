const find_first_and_last_position_of_element_in_sorted_array = {
    id: '0005',
    name: 'find_first_and_last_position_of_element_in_sorted_array',
    refLink: [
        'https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/solution/javascriptzui-qing-xi-de-er-fen-cha-zhao-fu-shuo-m/',
        'https://www.lintcode.com/problem/find-first-and-last-position-of-element-in-sorted-array/solution'
    ],
    level: 'Easy',
    tag: [
        'Binary Search',
    ],
    notes: ``,
    jsSolution: `
        // Given an array of integers nums sorted in ascending order, 
        // find the starting and ending position of a given target value.

        // Your algorithm's runtime complexity must be in the order of O(log n).
        
        // If the target is not found in the array, return [-1, -1].
        
        // 在线评测地址: https://www.lintcode.com/problem/find-first-and-last-position-of-element-in-sorted-array/

        /**
         * @param {number[]} nums
         * @param {number} target
         * @return {number[]}
         */
        var searchRange = function (nums, target) {
            let low = 0;
            let high = nums.length
            while (low < high) {
                let mid = low + Math.floor((high - low) / 2)
                if (nums[mid] >= target) {
                    high=mid
                }
                else {
                    low=mid+1
                }
            } 
            
            //如果没有找到最左索引，说明值不在数组中，直接返回 [-1,-1]
            if (nums[low] !== target) return [-1, -1]
            let resut = [low]
            high = nums.length
            low=0
            while (low < high) {
                let mid = low + Math.floor((high - low) / 2)
                if (nums[mid] > target) {
                    high = mid
                } else {
                    low = mid + 1
                }
            }
            //最右索引是 low-1
            resut[1] = low - 1
            return resut
        };
    `,
}

export default find_first_and_last_position_of_element_in_sorted_array