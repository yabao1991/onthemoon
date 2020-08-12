const Two_Sum_Closest_to_target = {
    id: '0056',
    name: 'Two_Sum_Closest_to_target', 
    refLink: [
        'https://www.lintcode.com/problem/two-sum-closest-to-target/description',
        'https://www.jiuzhang.com/solution/two-sum-closest-to-target/#tag-highlight'
    ],
    level: 'Medium',
    tag: [],
    notes: ``,
    jsSolution: `
        // http://www.lintcode.com/problem/two-sum-closest-to-target/

        // 在线评测地址: http://www.lintcode.com/problem/two-sum-closest-to-target/
        
        public class Solution {
            /**
             * @param nums an integer array
             * @param target an integer
             * @return the difference between the sum and the target
             */
            public int twoSumClosest(int[] nums, int target) {
                if (nums == null || nums.length < 2) {
                    return -1;
                }
                
                Arrays.sort(nums);
                
                int left = 0, right = nums.length - 1;
                int diff = Integer.MAX_VALUE;
                
                while (left < right) {
                    if (nums[left] + nums[right] < target) {
                        diff = Math.min(diff, target - nums[left] - nums[right]);
                        left++;
                    } else {
                        diff = Math.min(diff, nums[left] + nums[right] - target);
                        right--;
                    }
                }
                
                return diff;
            }
        }
        
        // 九章硅谷求职算法集训营版本
        public class Solution {
            /**
             * @param nums an integer array
             * @param target an integer
             * @return the difference between the sum and the target
             */
            int diff = Integer.MAX_VALUE;
            int T = 0;
            
            public void update(int[] A, int x, int y) {
                if (x != y && x >= 0 && x < A.length && y >= 0 && y < A.length) {
                    diff = Math.min(diff, Math.abs(A[x] + A[y] - T));
                }
            }
            
            public int twoSumClosest(int[] A, int target) {
                // Write your code here
                T = target;
                 if (A == null || A.length < 2) {
                    return -1;
                }
                
                Arrays.sort(A);
                
                int j = A.length - 1;
                for (int i = 0; i < A.length; ++i) {
                    while (j >= 0 && A[i] + A[j] > target) --j;
                    update(A, i, j + 1);
                    update(A, i, j);
                    update(A, i, j - 1);
                }
                
                return diff;
            }
        }
    `
}

export default Two_Sum_Closest_to_target
