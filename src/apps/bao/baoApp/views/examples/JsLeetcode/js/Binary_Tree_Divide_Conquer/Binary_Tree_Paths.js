const Binary_Tree_Paths = {
    id: '0018',
    name: 'Binary_Tree_Paths',
    refLink: [
        'https://leetcode-cn.com/problems/binary-tree-paths/solution/binary-tree-paths-di-gui-by-cnabbott/',
        'https://www.lintcode.com/problem/binary-tree-paths/description',
        'https://www.jiuzhang.com/solution/binary-tree-paths/'
    ],
    level: 'Easy',
    tag: [],
    notes: ``,
    jsSolution: `
        // Given a binary tree, return all root-to-leaf paths.

        // 在线评测地址: https://www.lintcode.com/problem/binary-tree-paths/


        var binaryTreePaths = function(root) {
            if (!root) return []
            if (root.left === null && root.right === null) return [root.val.toString()]
            let left = binaryTreePaths(root.left)
            let right = binaryTreePaths(root.right)
            return left.concat(right).map(item => root.val + '->' + item)
        }

        //
        // 递归的版本
        var binaryTreePaths = function(root) {
            const res = [];
            function findNext(root, route) {
                if(!root) return;
                if(!root.left && !root.right) res.push(route);
                findNext(root.left, root.left ? route + '->' + root.left.val : route);
                findNext(root.right, root.right ? route + '->' + root.right.val : route);
            }
            findNext(root, (root && root.val) + '');
            return res;
        }

        // 非递归的版本
        var binaryTreePaths = function(root) {
            if(!root) return [];
            const stack = [root];
            let i = 1;
            const route = [root.val + ''];
            const res = [];
            while(i) {
                while(i--) {
                    const front = stack.pop();
                    if(!front) continue;
                    stack.push(front.left);
                    stack.push(front.right);
                    const resFront = route.pop();
                    if(!front.left && !front.right) {
                        res.push(resFront);
                        continue;
                    }
                    front.left && route.push(resFront + '->' + front.left.val);
                    front.right && route.push(resFront + '->' + front.right.val);
                }
                i = stack.length;
            }
            return res;
        };
    `
}

export default Binary_Tree_Paths
