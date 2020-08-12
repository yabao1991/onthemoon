const Minimum_Subtree = {
    id: '0019',
    name: 'Minimum_Subtree',
    refLink: [
        'https://www.lintcode.com/problem/minimum-subtree/description',
        'https://www.jiuzhang.com/solution/minimum-subtree/#tag-highlight'
    ],
    level: 'Easy',
    tag: [],
    notes: `JAVA only`,
    jsSolution: `
        // Given a binary tree, find the subtree with minimum sum. Return the root of the subtree.

        // 在线评测地址: https://www.lintcode.com/problem/minimum-subtree/

        // version 1 : traverse + divide conquer
        public class Solution {
            private TreeNode subtree = null;
            private int subtreeSum = Integer.MAX_VALUE;
            /**
             * @param root the root of binary tree
             * @return the root of the minimum subtree
             */
            public TreeNode findSubtree(TreeNode root) {
                helper(root);
                return subtree;
            }
            
            private int helper(TreeNode root) {
                if (root == null) {
                    return 0;
                }
                
                int sum = helper(root.left) + helper(root.right) + root.val;
                if (sum <= subtreeSum) {
                    subtreeSum = sum;
                    subtree = root;
                }
                return sum;
            }
        }
    `
}

export default Minimum_Subtree
