const Subarray_Sum  = {
    id: '0050',
    name: 'Subarray_Sum ', 
    refLink: [
        'https://www.jiuzhang.com/solution/subarray-sum/#tag-highlight',
        'https://www.lintcode.com/problem/subarray-sum/description'

    ],
    level: 'Hard',
    tag: [],
    notes: `JAVA only`,
    jsSolution: `
        // Given an integer array, find a subarray where the sum of numbers is zero. Your code should return the index of the first number and the index of the last number.

        // 在线评测地址: https://www.lintcode.com/problem/subarray-sum/
        
        /**
         * @param nums: A list of integers
         * @return: A list of integers includes the index of the first number
         *          and the index of the last number
         */
        public ArrayList<Integer> subarraySum(int[] nums) {
            // write your code here
           
            int len = nums.length;
           
            ArrayList<Integer> ans = new ArrayList<Integer>();
            HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
           
            map.put(0, -1);
           
            int sum = 0;
            for (int i = 0; i < len; i++) {
                sum += nums[i];
               
                if (map.containsKey(sum)) {
                    ans.add(map.get(sum) + 1);
                    ans.add(i);
                    return ans;
                }
                
                map.put(sum, i);
            }
           
            return ans;
        }
    }
    `
}

export default Subarray_Sum 
