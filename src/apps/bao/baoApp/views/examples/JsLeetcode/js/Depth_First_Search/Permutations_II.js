const Permutations_II = {
    id: '0038',
    name: 'Permutations_II', 
    refLink: [
        'https://www.lintcode.com/problem/permutations-ii/description',
        'https://www.jiuzhang.com/solution/permutations-ii/'
    ],
    level: 'Medium',
    tag: [],
    notes: `JAVA only`,
    jsSolution: `
        // Given a list of numbers with duplicate number in it. Find all unique permutations.

        // 在线评测地址: https://www.lintcode.com/problem/permutations-ii/

        public class Solution {
            /*
             * @param :  A list of integers
             * @return: A list of unique permutations
             */
            public List<List<Integer>> permuteUnique(int[] nums) {
                List<List<Integer>> results = new ArrayList<>();
                if (nums == null) {
                    return results;
                }
                
                Arrays.sort(nums);
                dfs(nums, new boolean[nums.length], new ArrayList<Integer>(), results);
                
                return results;
            }
            
            private void dfs(int[] nums,
                             boolean[] visited,
                             List<Integer> permutation,
                             List<List<Integer>> results) {
                if (nums.length == permutation.size()) {
                    results.add(new ArrayList<Integer>(permutation));
                    return;
                }
                
                for (int i = 0; i < nums.length; i++) {
                    if (visited[i]) {
                        continue;
                    }
                    if (i > 0 && nums[i] == nums[i - 1] && !visited[i - 1]) {
                        continue;
                    }
                    
                    permutation.add(nums[i]);
                    visited[i] = true;
                    dfs(nums, visited, permutation, results);
                    visited[i] = false;
                    permutation.remove(permutation.size() - 1);
                }
            }
         };
    `
}

export default Permutations_II
