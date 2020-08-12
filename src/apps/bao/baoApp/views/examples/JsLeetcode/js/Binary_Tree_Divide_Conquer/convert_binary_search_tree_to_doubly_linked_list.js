const convert_binary_search_tree_to_doubly_linked_list = {
    id: '0024',
    name: 'convert_binary_search_tree_to_doubly_linked_list',
    refLink: [
        'https://blog.csdn.net/MeiLuan_yahoho/article/details/88920640',
        'https://www.jiuzhang.com/solutions/convert-binary-search-tree-to-doubly-linked-list/'
    ],
    level: 'Easy',
    tag: [],
    notes: ``,
    jsSolution: `
        // Convert a binary search tree to doubly linked list with in-order traversal.

        // 在线评测地址: http://www.lintcode.com/problem/convert-binary-search-tree-to-doubly-linked-list/

        function Convert(node)
        {  
            var stack = [];
            var prev ;
            var root ;
            // write code here
            while(node!= null||stack.length!=0){
                while(node!=null){
                    stack.push(node);
                    node = node.left;
                } 
                node = stack.pop();
                if(!prev){
                    root = node;
                    node.left = null;
                }else{
                    prev.right = node;
                    node.left = prev;
                }
                prev = node;
                    node = node.right;
            }
            return root;
        }
    `
}

export default convert_binary_search_tree_to_doubly_linked_list
