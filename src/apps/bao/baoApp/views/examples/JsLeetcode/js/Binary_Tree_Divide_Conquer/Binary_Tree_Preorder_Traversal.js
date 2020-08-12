const Binary_Tree_Preorder_Traversal = {
    id: '0014',
    name: 'Binary_Tree_Preorder_Traversal',
    refLink: [
        'https://www.lintcode.com/problem/binary-tree-preorder-traversal/description',
        'https://www.jiuzhang.com/solution/binary-tree-preorder-traversal/',
        'https://leetcode-cn.com/problems/binary-tree-preorder-traversal/solution/jsde-you-ya-shi-xian-by-ba-qian-niao-2/'
    ],
    level: 'Easy',
    tag: [],
    notes: ``,
    jsSolution: `
        // Given a binary tree, return the preorder traversal of its nodes' values.

        // 在线评测地址: https://www.lintcode.com/problem/binary-tree-preorder-traversal/


        const preorderTraversal = function(root) {
            return root ? [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)] : []
        };

        const preorderTraversal = function(root) {
            let arr = [], res = []
            root && arr.push(root)
        
            while(arr.length > 0) {
                let cur = arr.pop()
                res.push(cur.val)
        
                cur.right && arr.push(cur.right)
                cur.left && arr.push(cur.left)
            }
            return res
        };
    `
}

export default Binary_Tree_Preorder_Traversal
