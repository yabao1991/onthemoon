const Lowest_Common_Ancestor_of_a_Binary_Tree = {
    id: '0022',
    name: 'Lowest_Common_Ancestor_of_a_Binary_Tree',
    refLink: [
        'https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/solution/chao-jian-dan-di-gui-pythonjavascript-by-azl397985/',
        'https://www.lintcode.com/problem/lowest-common-ancestor-of-a-binary-tree/description',
        'https://www.lintcode.com/problem/lowest-common-ancestor-of-a-binary-tree/description'
    ],
    level: 'Easy',
    tag: [],
    notes: ``,
    jsSolution: `
        // Given a binary tree, find the subtree with maximum average. Return the root of the subtree.

        // 在线评测地址: https://www.lintcode.com/problem/subtree-with-maximum-average/

        // 复杂度分析

        // 时间复杂度：O(N)O(N)
        // 空间复杂度：O(N)O(N)

        var lowestCommonAncestor = function(root, p, q) {
            if (!root || root === p || root === q) return root;
            const left = lowestCommonAncestor(root.left, p, q);
            const right = lowestCommonAncestor(root.right, p, q);
            if (!left) return right; // 左子树找不到，返回右子树
            if (!right) return left; // 右子树找不到，返回左子树
            return root;
        };
    `
}

export default Lowest_Common_Ancestor_of_a_Binary_Tree
