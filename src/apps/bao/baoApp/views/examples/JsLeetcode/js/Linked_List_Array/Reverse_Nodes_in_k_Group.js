const Reverse_Nodes_in_k_Group = { 
    id: '0042',
    name: 'Reverse_Nodes_in_k_Group',
    refLink: [
        'https://leetcode-cn.com/problems/reverse-nodes-in-k-group/solution/25-k-ge-yi-zu-fan-zhuan-lian-biao-by-alexer-660/',
        'https://www.lintcode.com/problem/reverse-nodes-in-k-group/description',
        'https://www.jiuzhang.com/solution/reverse-nodes-in-k-group/'
    ],
    level: 'Hard',
    tag: [],
    notes: ``,
    jsSolution: `
        // Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

        // If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
        
        // You may not alter the values in the nodes, only nodes itself may be changed.
        // Only constant memory is allowed.
        
        // 在线评测地址: https://www.lintcode.com/problem/reverse-nodes-in-k-group/

        解法一：迭代
        思路同206. 反转链表 - 解法一
        区别
        限制k个
        用计数实现，实时更新链表需要反转部分的头、尾节点
        /**
         * Definition for singly-linked list.
         * function ListNode(val) {
         *     this.val = val;
         *     this.next = null;
         * }
         */
        /**
         * @param {ListNode} head
         * @param {number} k
         * @return {ListNode}
         */
        var reverseKGroup = function(head, k) {
            let cur = head;
            let count = 0;
            // 求k个待反转元素的首节点和尾节点
            while(cur != null && count != k){
                cur = cur.next;
                count++;
            }
            // 足够k个节点，去反转
            if(count == k){
                // 递归链接后续k个反转的链表头节点
                cur = reverseKGroup(cur,k);
                while(count != 0){
                    count--;
                    // 反转链表
                    let tmp = head.next;
                    head.next = cur;
                    cur = head;
                    head = tmp;
                }
                head = cur;
            }
            return head;
        };
        解法二：递归 II
        同解法一
        区别
        while改成for
        /**
         * Definition for singly-linked list.
         * function ListNode(val) {
         *     this.val = val;
         *     this.next = null;
         * }
         */
        /**
         * @param {ListNode} head
         * @param {number} k
         * @return {ListNode}
         */
        var reverseKGroup = function(head, k) {
            if(!head) return null;
            // 反转链表
            let reverse = (a,b) => {
                let pre;
                let cur = a;
                let next = b;
                while(cur != b){
                    next = cur.next;
                    cur.next = pre;
                    pre = cur;
                    cur = next;
                }
                return pre;
            }
            // 反转区间a-b的k个待反转的元素
            let a = head;
            let b = head;
            for(let i = 0;i < k;i++){
                // 不足k个，不需要反转
                if(!b) return head;
                b = b.next;
            }
            // 反转前k个元素
            let newHead = reverse(a,b);
            // 递归链接后续反转链表
            a.next = reverseKGroup(b,k);
            return newHead;
        };
        解法三：栈解
        思路同206. 反转链表 - 解法四
        区别
        反转k个
        /**
         * Definition for singly-linked list.
         * function ListNode(val) {
         *     this.val = val;
         *     this.next = null;
         * }
         */
        /**
         * @param {ListNode} head
         * @param {number} k
         * @return {ListNode}
         */
        var reverseKGroup = function(head, k) {
            let stack = [];
            let preHead = new ListNode(0);
            let pre = preHead;
            // 循环链接后续反转链表
            while(true){
                let count = 0;
                let tmp = head;
                while(tmp && count < k){
                    stack.push(tmp);
                    tmp = tmp.next;
                    count++;
                }
                // 不够k个，直接链接剩下链表返回
                if(count != k){
                    pre.next = head;
                    break;
                }
                // 出栈即是反转
                while(stack.length > 0){
                    pre.next = stack.pop();
                    pre = pre.next;
                }
                pre.next = tmp;
                head = tmp;
            }
            return preHead.next;
        };
    `
}

export default Reverse_Nodes_in_k_Group
