const Copy_List_with_Random_Pointer = {
    id: '0043',
    name: 'Copy_List_with_Random_Pointer',
    refLink: [
        'https://leetcode-cn.com/problems/copy-list-with-random-pointer/solution/javascript-jie-ti-by-ldq-2/',
        'https://www.lintcode.com/problem/copy-list-with-random-pointer/description',
        'https://www.jiuzhang.com/solution/copy-list-with-random-pointer/#tag-highlight'
    ],
    level: 'Medium',
    tag: [],
    notes: ``,
    jsSolution: `
        // A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

        // Return a deep copy of the list.
        
        // 在线评测地址: https://www.lintcode.com/problem/copy-list-with-random-pointer/

        const copyRandomList = head => {
            if (!head) return null
            let curr = head, node = new Node(), tmp = node, map = new Map()
            while (curr) {
              tmp.val = curr.val
              tmp.next = curr.next ? new Node() : null
              map.set(curr, tmp)
              tmp = tmp.next
              curr = curr.next
            }
            tmp = node
            while (head) {
              tmp.random = head.random ? map.get(head.random) : null
              head = head.next
              tmp = tmp.next
            }
            return node
        }
    `
}

export default Copy_List_with_Random_Pointer
