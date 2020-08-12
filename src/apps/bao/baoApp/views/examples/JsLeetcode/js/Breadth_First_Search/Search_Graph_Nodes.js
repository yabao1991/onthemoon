const Search_Graph_Nodes = {
    id: '0030',
    name: 'Search_Graph_Nodes',
    refLink: [
        'https://www.lintcode.com/problem/search-graph-nodes/description',
        'https://www.jiuzhang.com/solution/search-graph-nodes/'
    ],
    level: 'Medium',
    tag: [
        ''
    ],
    notes: `JAVA only`,
    jsSolution: `
        // Given a undirected graph, a node and a target, return the nearest node to given node which value of it is target, return NULL if you can't find.

        // There is a mapping store the nodes' values in the given parameters.
        
        // 在线评测地址: https://www.lintcode.com/problem/search-graph-nodes/

        /**
         * Definition for graph node.
         * class GraphNode {
         *     int label;
         *     ArrayList<UndirectedGraphNode> neighbors;
         *     UndirectedGraphNode(int x) { 
         *         label = x; neighbors = new ArrayList<UndirectedGraphNode>(); 
         *     }
         * };
         */
        public class Solution {
            /**
             * @param graph a list of Undirected graph node
             * @param values a hash mapping, <UndirectedGraphNode, (int)value>
             * @param node an Undirected graph node
             * @param target an integer
             * @return the a node
             */
            public UndirectedGraphNode searchNode(ArrayList<UndirectedGraphNode> graph,
                                                Map<UndirectedGraphNode, Integer> values,
                                                UndirectedGraphNode node,
                                                int target) {
                // Write your code here
                Queue<UndirectedGraphNode> queue = new LinkedList<UndirectedGraphNode>();
                Set<UndirectedGraphNode> hash = new HashSet<UndirectedGraphNode>();

                queue.offer(node);
                hash.add(node);

                while (!queue.isEmpty()) {
                    UndirectedGraphNode head = queue.poll();
                    if (values.get(head) == target) {
                        return head;
                    }
                    for (UndirectedGraphNode nei : head.neighbors) {
                        if (!hash.contains(nei)){
                            queue.offer(nei);
                            hash.add(nei);
                        }
                    }
                }
                return null;
            }
        }
    `
}

export default Search_Graph_Nodes
