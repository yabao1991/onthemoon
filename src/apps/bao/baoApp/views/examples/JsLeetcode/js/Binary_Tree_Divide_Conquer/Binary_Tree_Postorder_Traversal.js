const Binary_Tree_Postorder_Traversal  = {
    id: '0016',
    name: 'Binary_Tree_Postorder_Traversal ',
    refLink: [
        'https://leetcode-cn.com/problems/binary-tree-postorder-traversal/solution/145er-cha-shu-de-hou-xu-bian-li-javascript-ti-jie-/',
        'https://www.jiuzhang.com/solution/binary-tree-postorder-traversal/',
        'https://www.lintcode.com/problem/binary-tree-postorder-traversal/description'
    ],
    level: 'Easy',
    tag: [],
    notes: ``,
    jsSolution: `
        // Given a binary tree, return the postorder traversal of its nodes' values.

        // 在线评测地址: https://www.lintcode.com/problem/binary-tree-postorder-traversal/


        // let preNode = function (root,arr){
        //     if(!root) return [];
        //     preNode(root.left,arr);
        //     preNode(root.right,arr);
        //     arr.push(root.val);
        // }

        // const postorderTraversal = function(root) {
        //     if(!root) return [];
        //     let arr =[];
        //     preNode(root,arr);
        //     return arr
        // };

        const postorderTraversal = root => {
        let res = [], stack = []
        while (root || stack.length) {
            res.unshift(root.val)
            if (root.left) stack.push(root.left)
            if (root.right) stack.push(root.right)
            root = stack.pop()
        }
        return res
        }
    `
}

export default Binary_Tree_Postorder_Traversal 
