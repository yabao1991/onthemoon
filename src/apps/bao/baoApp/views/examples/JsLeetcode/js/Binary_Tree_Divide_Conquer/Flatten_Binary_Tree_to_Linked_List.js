const Flatten_Binary_Tree_to_Linked_List = {
    id: '0025',
    name: 'Flatten_Binary_Tree_to_Linked_List',
    refLink: [
        'https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/solution/die-dai-javascript-by-a-si-shua-ma-tong/',
        'https://www.lintcode.com/problem/flatten-binary-tree-to-linked-list/description',
        'https://www.jiuzhang.com/solution/flatten-binary-tree-to-linked-list/'
    ],
    level: 'Easy',
    tag: [],
    notes: ``,
    jsSolution: `
        // Flatten a binary tree to a fake "linked list" in pre-order traversal.

        // Here we use the right pointer in TreeNode as the next pointer in ListNode.
        
        // 在线评测地址: https://www.lintcode.com/problem/flatten-binary-tree-to-linked-list/

        /**
         * @param root: a TreeNode, the root of the binary tree
         * @return: 
         */

        const flatten = function(root) {
            if(!root) return null
            const stack = []
            while(root.left || root.right || stack.length>0){
                if(root.right) stack.push(root.right)
                if(root.left){
                    root.right = root.left
                    root.left = null
                    
                }else{
                    root.right = stack.pop()
                }
                root = root.right
            }
        };
    `
}

export default Flatten_Binary_Tree_to_Linked_List
