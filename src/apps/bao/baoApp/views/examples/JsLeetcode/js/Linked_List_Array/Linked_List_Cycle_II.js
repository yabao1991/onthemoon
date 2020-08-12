const Linked_List_Cycle_II = {
    id: '0045',
    name: 'Linked_List_Cycle_II',
    refLink: [
        'https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/142-huan-xing-lian-biao-ii-by-alexer-660/',
        'https://www.lintcode.com/problem/linked-list-cycle-ii/description',
        'https://www.jiuzhang.com/solution/linked-list-cycle-ii/'
    ],
    level: 'Hard',
    tag: [],
    notes: ``,
    jsSolution: `
        // Given a linked list, return the node where the cycle begins.

        // If there is no cycle, return null.
        
        // 在线评测地址: https://www.lintcode.com/problem/linked-list-cycle-ii/

        解法一：标记法
        思路同-141. 环形链表-解法二
        /**
         * Definition for singly-linked list.
         * function ListNode(val) {
         *     this.val = val;
         *     this.next = null;
         * }
         */

        /**
         * @param {ListNode} head
         * @return {ListNode}
         */
        var detectCycle = function(head) {
            while(head && head.next){
                if(head.flag){
                    return head;
                }else{
                    head.flag = 1;
                    head = head.next;
                }
            }
            return null;
        };
        解法二：数组判重
        思路同-141. 环形链表-解法一
        /**
         * Definition for singly-linked list.
         * function ListNode(val) {
         *     this.val = val;
         *     this.next = null;
         * }
         */

        /**
         * @param {ListNode} head
         * @return {ListNode}
         */
        var detectCycle = function(head) {
            let res = [];
            while(head != null){
                if(res.includes(head)){
                    return head;
                }else{
                    res.push(head);
                }
                head = head.next;
            }
            return null;
        };
        解法三：双指针
        思路
        图解
        截屏2020-01-05下午3.33.09.png
        公式
        S：初始点到环的入口点A的距离
        m：环的入口点到快慢双指针在环内的相遇点B的距离
        L：环的周长
        如果 S == L - m
        那么可以设置两个步数相同的指针分别从，链表入口节点和快慢双指针相遇节点同时出发
        当他们第一次相遇时，即是环的入口节点A所在
        因此，我们需要证明 S == L - m
        已知快指针的行走距离是慢指针行走距离的两倍
        那么他们在环内第一次相遇时
        慢指针走过了：S + xL
        快指针走过了：S + yL
        那么，设C为指针走过的距离
        C(快) - C(慢) = (y-x)L = nL
        C(慢) = S + m
        因为C(快) == 2C(慢)
        所以C(快) - C(慢) == C(慢)
        S + m = nL
        S = nL - m
        而L为环的周长 ，n为任意正整数
        所以 S == L - m 成立
        解即为反证法的操作
        判断链表是否有环
        思路同-141. 环形链表-解法三
        /**
         * Definition for singly-linked list.
         * function ListNode(val) {
         *     this.val = val;
         *     this.next = null;
         * }
         */

        /**
         * @param {ListNode} head
         * @return {ListNode}
         */
        var detectCycle = function(head) {
            if(!head || !head.next) return null;
            let slow = head;
            let fast = head;
            let start = head;
            while (fast != null && fast.next != null) {
                slow = slow.next;
                fast = fast.next.next;
                if (slow == fast) {
                    while (start != slow) {
                        slow = slow.next;
                        start = start.next;
                    }
                    return slow;
                }
            }
            return null;
        };
    `
}

export default Linked_List_Cycle_II
