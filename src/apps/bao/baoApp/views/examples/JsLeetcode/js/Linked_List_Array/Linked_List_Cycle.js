const Linked_List_Cycle = {
    id: '0044',
    name: 'Linked_List_Cycle',
    refLink: [
        'https://leetcode-cn.com/problems/linked-list-cycle/solution/shuang-jie-fa-floydsuan-fa-ha-xi-biao-javascriptsh/',
        'https://www.lintcode.com/problem/linked-list-cycle/desciption',
        'https://www.jiuzhang.com/solution/linked-list-cycle/#tag-highlight'
    ],
    level: 'Medium',
    tag: [],
    notes: `TEST with issue`,
    jsSolution: `
        // Given a linked list, determine if it has a cycle in it.

        // 在线评测地址: https://www.lintcode.com/problem/linked-list-cycle/

        解法 1：Floyd 判圈算法
        Floyd 判圈算法类似龟兔赛跑，需要用到快指针 fast 和慢指针 slow。算法流程是：

        slow 每次移动 1 不，fast 移动 2 步
        一直移动下去，若 slow、fast 相遇，那么必有环；若 slow 或 fast 抵达边界，那么不存在环。
        代码实现如下：

        // ac地址：https://leetcode-cn.com/problems/linked-list-cycle/
        // 原文地址：https://xxoo521.com/2020-03-03-linked-list-cycle/

        /**
         * @param {ListNode} head
         * @return {boolean}
         */
        var hasCycle = function(head) {
            let slow = head;
            let fast = head;

            while (slow && fast && fast.next) {
                slow = slow.next;
                fast = fast.next.next;
                if (slow === fast) return true;
            }
            return false;
        };
        解法 2: 哈希表
        这种解法比较容易想到，使用哈希表来记录节点是否出现过。若存在环，那么一直向下访问，一定会回到环的入口处。

        代码实现如下：

        // ac地址：https://leetcode-cn.com/problems/linked-list-cycle/
        // 原文地址：https://xxoo521.com/2020-03-03-linked-list-cycle/

        /**
         * @param {ListNode} head
         * @return {boolean}
         */
        var hasCycle = function(head) {
            if (!head) return false;

            const map = new Map();
            let node = head;
            map.set(node, true);

            while (node.next) {
                if (map.get(node.next)) {
                    // map.clear() // 节省时间可以去掉
                    return true;
                }
                map.set(node.next, true);
                node = node.next;
            }
            // map.clear()
            return false;
        };
    `
}

export default Linked_List_Cycle
