const Binary_Tree_Inorder_Traversal = {
    id: '0015',
    name: 'Binary_Tree_Inorder_Traversal',
    refLink: [
        'https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/jszhong-xu-bian-li-by-gaoyibo/',
        'https://www.lintcode.com/problem/binary-tree-inorder-traversal/description',
        'https://www.jiuzhang.com/solution/binary-tree-inorder-traversal/'
    ],
    level: 'Easy',
    tag: [],
    notes: ``,
    jsSolution: `
        // Given a binary tree, return the inorder traversal of its nodes' values.

        // 在线评测地址: https://www.lintcode.com/problem/binary-tree-inorder-traversal/


        /**
         * @param root: A Tree
         * @return: Inorder in ArrayList which contains node values.
         */
        const inorderTraversal = function (root) {
            // write your code here
            let result = []
            
            if (root === null) {
                return []
            }
            
            let left = inorderTraversal(root.left)
            let right = inorderTraversal(root.right)
            
            result.push.apply(result, left)
            result.push(root.val)
            result.push.apply(result, right)
            
            // traverse(root, result)
            return result
        }

        // function traverse (root, result) {
        //     if (root === null) {
        //         return []
        //     }
            
        //     traverse(root.left, result)
        //     result.push(root.val)
        //     traverse(root.right, result)
        // }

        // const inorderTraversal = function(root) {
        //     let arr = []
        //     let stackArr = []
        //     while(root!=null || stackArr.length!=0){

        //         while(root!=null){
        //             stackArr.push(root)
        //             root = root.left
        //         }
        //         root = stackArr.pop()
        //         arr.push(root.val)
        //         root = root.right
        //     }
        //     return arr
        // };
    `
}

export default Binary_Tree_Inorder_Traversal