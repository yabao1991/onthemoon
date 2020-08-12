const Maximum_Depth_of_Binary_Tree = {
    id: '0017',
    name: 'Maximum_Depth_of_Binary_Tree',
    refLink: [
        'https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/104-er-cha-shu-de-zui-da-shen-du-by-alexer-660/',
        'https://www.lintcode.com/problem/maximum-depth-of-binary-tree/description',
        'https://www.jiuzhang.com/solution/maximum-depth-of-binary-tree/#tag-other'
    ],
    level: 'Easy',
    tag: [],
    notes: ``,
    jsSolution: `
        // Given a binary tree, find its maximum depth.

        // The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
        
        // 在线评测地址: https://www.lintcode.com/problem/maximum-depth-of-binary-tree/


        解法一：递归 DFS
        节点的高度 = Max(左子树的高度，右子树的高度) + 1
        以此类推，最后一个左或右节点高度为0 再反过来相加回去即可
        时间复杂度：O(n)
        空间复杂度
        最坏情况下 O(n) 退化为单链表
        最好情况下 O(logn) 为平衡二叉树且高度为logn
        /**
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {TreeNode} root
         * @return {number}
         */
        var maxDepth = function(root) {
            function getDepth(root,leftSubtreeDepth,rightSubtreeDepth){
                if(root != null){
                    leftSubtreeDepth = getDepth(root.left);
                    rightSubtreeDepth = getDepth(root.right);
                    return Math.max(leftSubtreeDepth,rightSubtreeDepth) + 1;   
                }else{
                    return 0;
                }
            }
            return getDepth(root);
        };

        解法二：队列 BFS
        广度优先遍历 BFS
        此处即二叉树的层次(序)遍历
        求最大深度 亦即 求二叉树有几层
        广度优先代码
        特点："从左到右，从上到下"
        队列
        特点："先进先出"
        队列实现广度优先
        遍历二叉树节点，依次将当前节点 和它的左右子节点入队，并再一一出队
        针对子节点的节点重复上一步操作
        刚好符合"先进先出" => "先入队再出队"
        数组：push -> shift
        所以二叉树的广度优先即层序遍历用队列实现为
        /**
         * Definition for a binary tree node.
         * function TreeNode(val) {
         *     this.val = val;
         *     this.left = this.right = null;
         * }
         */
        /**
         * @param {TreeNode} root
         * @return {number}
         */
        var maxDepth = function(root) {
            if(root == null){
                return 0;
            }
            var tmpQueue = [root];
            var result = [];
            var currNode = null;
            while(tmpQueue.length != 0){ --------------------------(1)
                currNode = tmpQueue.shift();
                result.push(currNode);
                if(node.left != null){
                    tmpQueue.push(node.left);
                }
                if(node.right != null){
                    tmpQueue.push(node.right);
                }
            }
            return result;
        };
    `
}

export default Maximum_Depth_of_Binary_Tree
