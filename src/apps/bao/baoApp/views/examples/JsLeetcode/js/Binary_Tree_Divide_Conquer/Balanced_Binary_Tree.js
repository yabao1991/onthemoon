const Balanced_Binary_Tree = {
    id: '0020',
    name: 'Balanced_Binary_Tree',
    refLink: [
        'https://leetcode-cn.com/problems/balanced-binary-tree/solution/di-gui-pan-duan-ping-heng-er-cha-shu-by-zhu-zhu-xi/',
        'https://www.lintcode.com/problem/balanced-binary-tree/description',
        'https://www.jiuzhang.com/solution/balanced-binary-tree/'
    ],
    level: 'Easy',
    tag: [],
    notes: ``,
    jsSolution: `
        // Given a binary tree, determine if it is height-balanced.

        // For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
        
        // 在线评测地址: https://www.lintcode.com/problem/balanced-binary-tree/

        /**
         * @param {TreeNode} root
         * @return {boolean}
         */
        var isBalanced = function(root) {
            // 遍历到底还没有发现高度差超过 1 的左右子树，那么这个子树肯定符合平衡二叉树的规范
            if (!root) {
                return true
            }
            // 判断左右子树的高度差，如果超过 1 那么立即返回 false
            if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) {
                return false
            }
            // 分别递归左右子树
            return isBalanced(root.left) && isBalanced(root.right)
            // 获取某个子树的高度
            function getHeight (root) {
                if (!root) {
                    return 0
                }
                return Math.max(getHeight(root.left), getHeight(root.right)) + 1
            }
        };
    `
}

export default Balanced_Binary_Tree
