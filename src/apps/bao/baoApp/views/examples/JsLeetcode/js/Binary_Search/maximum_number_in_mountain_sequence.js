
const maximum_number_in_mountain_sequence = {
    id: '0011',
    name: 'maximum_number_in_mountain_sequence',
    refLink: [
        'https://www.lintcode.com/problem/maximum-number-in-mountain-sequence/description',
        'https://www.jiuzhang.com/solution/maximum-number-in-mountain-sequence/',
    ],
    level: 'Easy',
    tag: [
        'Binary Search',
    ],
    notes: `JAVA, js doesn't work`,
    jsSolution: `
        // Given a mountain sequence of n integers which increase firstly and then decrease, find the mountain top.

        // 在线评测地址: https://www.lintcode.com/problem/maximum-number-in-mountain-sequence/

        // version 1：二分法
        public class Solution {
            /**
             * @param nums a mountain sequence which increase firstly and then decrease
             * @return then mountain top
             */
            public int mountainSequence(int[] nums) {
                // Write your code here
                if (nums == null || nums.length == 0) {
                    return 0;
                }
                int start = 0;
                int end = nums.length - 1;
                while (start + 1 < end) {
                    int mid = start + (end - start) / 2;
                    if (nums[mid] > nums[mid + 1]) {
                        end = mid;
                    } else {
                        start = mid;
                    }
                }
                return Math.max(nums[start], nums[end]);
            }
        }
    `,
}

export default maximum_number_in_mountain_sequence