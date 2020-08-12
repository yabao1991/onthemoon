const Validate_Binary_Search_Tree = {
    id: '0023',
    name: 'Validate_Binary_Search_Tree',
    refLink: [
        'https://leetcode-cn.com/problems/validate-binary-search-tree/solution/js-di-gui-san-xing-dai-ma-by-jsyt/',
        'https://blog.csdn.net/qq_34629352/article/details/102938948',
        'https://www.lintcode.com/problem/validate-binary-search-tree/description'
    ],
    level: 'Easy',
    tag: [],
    notes: ``,
    jsSolution: `
        // Given a binary tree, determine if it is a valid binary search tree (BST).

        // Assume a BST is defined as follows:
        
        // The left subtree of a node contains only nodes with keys less than the node's key.
        // The right subtree of a node contains only nodes with keys greater than the node's key.
        // Both the left and right subtrees must also be binary search trees.
        // A single node tree is a BST
        // 在线评测地址: https://www.lintcode.com/problem/validate-binary-search-tree/

        var isValidBST = function(root, min = -Infinity, max = Infinity) {
            if (!root) return true;
            if (root.val <= min || root.val >= max) return false;
            return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
        };
    `
}

export default Validate_Binary_Search_Tree
