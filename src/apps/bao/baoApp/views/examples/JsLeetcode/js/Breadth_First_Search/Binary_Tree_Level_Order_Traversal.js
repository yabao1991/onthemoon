const Binary_Tree_Level_Order_Traversal = {
    id: '0026',
    name: 'Binary_Tree_Level_Order_Traversal',
    refLink: [
        'https://www.lintcode.com/problem/binary-tree-level-order-traversal/description',
        'https://www.jiuzhang.com/solution/binary-tree-level-order-traversal/#tag-highlight',
        'https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/102er-cha-shu-de-ceng-ci-bian-li-javascript-ti-jie/'
    ],
    level: 'Medium',
    tag: [
        ''
    ],
    notes: ``,
    jsSolution: `
        // Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

        // 在线评测地址: https://www.lintcode.com/problem/binary-tree-level-order-traversal/


        const levelOrder = root => {
            if (!root) return []
            let res = [], queue = [root]
            while (queue.length) {
              let arr = [], temp = []
              while (queue.length) {
                let curr = queue.shift()
                arr.push(curr.val)
                if (curr.left) temp.push(curr.left)
                if (curr.right) temp.push(curr.right)
              }
              queue = temp
              res.push(arr)
            }
            return res
        }
    `
}

export default Binary_Tree_Level_Order_Traversal
