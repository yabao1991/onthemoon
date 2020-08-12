const Serialize_and_Deserialize_Binary_Tree = {
    id: '0027',
    name: 'Serialize_and_Deserialize_Binary_Tree',
    refLink: [
        'https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/solution/javascriptceng-xu-bian-li-si-lu-he-shi-xian-by-xin/',
    ],
    level: 'Medium',
    tag: [
        ''
    ],
    notes: ``,
    jsSolution: `
        // 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

        // 请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
        
        // 示例: 
        
        // 你可以将以下二叉树：
        
        // 序列化为 "[1,2,3,null,null,4,5]"
        // 提示: 这与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。
        
        // 说明: 不要使用类的成员 / 全局 / 静态变量来存储状态，你的序列化和反序列化算法应该是无状态的。


        序列化二叉树思路
        使用广度优先（BFS）遍历所有节点（包括空节点），整体流程如下：

        初始化字符串 res
        初始化队列 queue，将 root 放入队列
        检查队列是否为空：
        队列不为空：取出队首节点，如果节点为 null，那么 res 更新为 res + '#,'；如果节点不是 null，那么 res 更新为 res + val，并且将节点的左右节点依次加入 queue。继续循环。
        队列为空：结束循环
        返回"[" + res + "]"
        
        以上面这棵二叉树为例，它的序列化结果是"[1,2,3,#,#,4,5,#,#,#,#]"

        序列化的代码实现如下：

        // ac地址：https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/
        // 原文地址：https://xxoo521.com/2020-02-13-serialize-and-deserialize-btree/

        /**
         * Encodes a tree to a single string.
         *
         * @param {TreeNode} root
         * @return {string}
         */
        var serialize = function(root) {
            if (!root) {
                return "[]";
            }

            let res = "";
            let node = root;
            const queue = [node];
            while (queue.length) {
                const front = queue.shift();
                if (front) {
                    res += \`\${front.val},\`;
                    queue.push(front.left);
                    queue.push(front.right);
                } else {
                    res += "#,";
                }
            }

            res = res.substring(0, res.length - 1); // 去掉最后一个逗号

            return \`[\${res}]\`;
        };
        反序列化二叉树思路
        以前面的二叉树为例，反序列话就是将字符串"[1,2,3,#,#,4,5,#,#,#,#]"重新还原成原来的二叉树。

        反序列化流程如下：

        去掉字符串 res 前后的[和]，并将其按照,逗号切分得到数组 nodes
        初始化队列 queue，放入 nodes 的第一个值对应的节点，nodes 弹出第一个值
        检查队列是否为空：
        队列不为空。从 queue 取出队首元素。从 nodes 中取出第一个值和第二值，依次处理。继续循环。
        队列为空。结束循环。
        返回根节点。
        反序列化函数的设计关键是：数组 nodes 取出元素的顺序和原二叉树层序遍历的顺序是对应的。

        反序列的函数实现如下：

        // ac地址：https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof/
        // 原文地址：https://xxoo521.com/2020-02-13-serialize-and-deserialize-btree/

        /**
         * Decodes your encoded data to tree.
         *
         * @param {string} data
         * @return {TreeNode}
         */
        var deserialize = function(data) {
            if (data.length <= 2) {
                return null;
            }

            const nodes = data.substring(1, data.length - 1).split(",");
            const root = new TreeNode(parseInt(nodes[0]));
            nodes.shift();

            const queue = [root];
            while (queue.length) {
                const node = queue.shift();
                // 第一个是左节点，节点为空，直接跳过
                const leftVal = nodes.shift();
                if (leftVal !== "#") {
                    node.left = new TreeNode(leftVal);
                    queue.push(node.left);
                }
                // 第二个是右节点，节点为空，直接跳过
                const rightVal = nodes.shift();
                if (rightVal !== "#") {
                    node.right = new TreeNode(rightVal);
                    queue.push(node.right);
                }
            }

            return root;
        };
    `
}

export default Serialize_and_Deserialize_Binary_Tree
