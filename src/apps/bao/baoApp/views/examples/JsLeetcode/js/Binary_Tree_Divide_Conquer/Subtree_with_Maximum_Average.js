const Subtree_with_Maximum_Average = {
    id: '0021',
    name: 'Subtree_with_Maximum_Average',
    refLink: [
        'https://www.lintcode.com/problem/subtree-with-maximum-average/description',
        'https://www.jiuzhang.com/solution/subtree-with-maximum-average/'
    ],
    level: 'Easy',
    tag: [],
    notes: `JAVA only`,
    jsSolution: `
        // Given a binary tree, find the subtree with maximum average. Return the root of the subtree.

        // 在线评测地址: https://www.lintcode.com/problem/subtree-with-maximum-average/

        // version 1: Traverse + Divide Conquer
        public class Solution {
            private class ResultType {
                public int sum, size;
                public ResultType(int sum, int size) {
                    this.sum = sum;
                    this.size = size;
                }
            }
            
            private TreeNode subtree = null;
            private ResultType subtreeResult = null;
            
            /**
             * @param root the root of binary tree
             * @return the root of the maximum average of subtree
             */
            public TreeNode findSubtree2(TreeNode root) {
                helper(root);
                return subtree;
            }
            
            private ResultType helper(TreeNode root) {
                if (root == null) {
                    return new ResultType(0, 0);
                }
                // 分治法计算左右子树的平均值
                ResultType left = helper(root.left);
                ResultType right = helper(root.right);
                // 当前subtree的结果是左右两颗子树的和的平均值加上自身
                ResultType result = new ResultType(
                    left.sum + right.sum + root.val,
                    left.size + right.size + 1
                );
                // 打擂台比较得到最大平均值的子树
                if (subtree == null ||
                    subtreeResult.sum * result.size < result.sum * subtreeResult.size
                ) {
                    subtree = root;
                    subtreeResult = result;
                }
                return result;
            }
        }
    `
}

export default Subtree_with_Maximum_Average
