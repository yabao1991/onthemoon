const last_position_of_target = {
    id: '0010',
    name: 'last_position_of_target',
    refLink: [
        'https://www.lintcode.com/problem/last-position-of-target/',
    ],
    level: 'Easy',
    tag: [
        'Binary Search',
    ],
    notes: `可提交，不能过所有test`,
    jsSolution: `
        // Find the last position of a target number in a sorted array. Return -1 if target does not exist.

        // 在线评测地址: https://www.lintcode.com/problem/last-position-of-target/

        /**
         * @param nums: An integer array sorted in ascending order
         * @param target: An integer
         * @return: An integer
         */
        const lastPosition = function (nums, target) {
            
            // write your code here
            let left = 0;
            let right = nums.length;
            while(left < right){
                let mid = (left + right) >> 1;
                if(nums[mid] == target){
                    left = mid + 1; 
                }else if(nums[mid] < target){
                    left = mid + 1;
                }else if(nums[mid] > target){
                    right = mid;
                }
            }
            left = left - 1
            return left
        }
    `,
}

export default last_position_of_target