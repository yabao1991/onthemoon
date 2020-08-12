const First_Position_Of_Target = {
    id: '0009',
    name: 'First_Position_Of_Target',
    refLink: [
        'https://www.lintcode.com/problem/first-position-of-target/',
    ],
    level: 'Easy',
    tag: [
        'Binary Search',
    ],
    notes: ``,
    jsSolution: `
        // For a given sorted array (ascending order) and a target number, 
        // find the first index of this number in O(log n) time complexity.

        // If the target number does not exist in the array, return -1.
        
        // 在线评测地址: https://www.lintcode.com/problem/first-position-of-target/

        /**
         * @param nums: The integer array.
         * @param target: Target to find.
         * @return: The first position of target. Position starts from 0.
         */
        const binarySearch = function (nums, target) {
            var left, right, mid, res;
            res = 0;
            left = 0;
            right = nums.length - 1;
            while (left <= right) {
                mid = Math.floor((left + right) / 2);
                if (nums[mid] === target) {
                    res = mid;
                }
                if (nums[mid] >= target) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
            if (nums[res] != target) {
                return -1;
            }
            return res;
        }
    `,
}

export default First_Position_Of_Target