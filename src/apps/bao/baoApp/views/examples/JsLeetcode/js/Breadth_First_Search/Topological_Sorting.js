const Topological_Sorting = {
    id: '0031',
    name: 'Topological_Sorting',
    refLink: [
        'https://www.jiuzhang.com/solution/topological-sorting/#tag-highlight',
        'https://www.lintcode.com/problem/topological-sorting/description'
    ],
    level: 'Medium',
    tag: [
        'JAVA'
    ],
    notes: `JAVA only`,
    jsSolution: `
        // Given an directed graph, a topological order of the graph nodes is defined as follow:

        // For each directed edge A -> B in graph, A must before B in the order list.
        // The first node in the order can be any node in the graph with no nodes direct to it.
        // Find any topological order for the given graph.
        
        // 在线评测地址: https://www.lintcode.com/problem/topological-sorting/


        public class Solution {
            /**
             * @param graph: A list of Directed graph node
             * @return: Any topological order for the given graph.
             */    
            public ArrayList<DirectedGraphNode> topSort(ArrayList<DirectedGraphNode> graph) {
                // write your code here
                ArrayList<DirectedGraphNode> result = new ArrayList<DirectedGraphNode>();
                HashMap<DirectedGraphNode, Integer> map = new HashMap();
                for (DirectedGraphNode node : graph) {
                    for (DirectedGraphNode neighbor : node.neighbors) {
                        if (map.containsKey(neighbor)) {
                            map.put(neighbor, map.get(neighbor) + 1);
                        } else {
                            map.put(neighbor, 1); 
                        }
                    }
                }
                Queue<DirectedGraphNode> q = new LinkedList<DirectedGraphNode>();
                for (DirectedGraphNode node : graph) {
                    if (!map.containsKey(node)) {
                        q.offer(node);
                        result.add(node);
                    }
                }
                while (!q.isEmpty()) {
                    DirectedGraphNode node = q.poll();
                    for (DirectedGraphNode n : node.neighbors) {
                        map.put(n, map.get(n) - 1);
                        if (map.get(n) == 0) {
                            result.add(n);
                            q.offer(n);
                        }
                    }
                }
                return result;
            }
        }
    `
}

export default Topological_Sorting
