const Knight_Shortest_Path = {
    id: '0034',
    name: 'Knight_Shortest_Path',
    refLink: [
        'https://www.lintcode.com/problem/knight-shortest-path/description',
        'https://www.jiuzhang.com/solution/knight-shortest-path/'
    ],
    level: 'Medium',
    tag: [
        ''
    ],
    notes: ``,
    jsSolution: `
        // Given a knight in a chessboard (a binary matrix with 0 as empty and 1 as barrier) with a source position, find the shortest path to a destination position, return the length of the route.
        // Return -1 if destination cannot be reached.
        
        // 在线评测地址: https://www.lintcode.com/problem/knight-shortest-path/


        public class Solution {
            int n, m; // size of the chessboard
            int[] deltaX = {1, 1, 2, 2, -1, -1, -2, -2};
            int[] deltaY = {2, -2, 1, -1, 2, -2, 1, -1};
            /**
             * @param grid a chessboard included 0 (false) and 1 (true)
             * @param source, destination a point
             * @return the shortest path 
             */
            public int shortestPath(boolean[][] grid, Point source, Point destination) {
                if (grid == null || grid.length == 0 || grid[0].length == 0) {
                    return -1;
                }
                
                n = grid.length;
                m = grid[0].length;
                
                Queue<Point> queue = new LinkedList<>();
                queue.offer(source);
                
                int steps = 0;
                while (!queue.isEmpty()) {
                    int size = queue.size();
                    for (int i = 0; i < size; i++) {
                        Point point = queue.poll();
                        if (point.x == destination.x && point.y == destination.y) {
                            return steps;
                        }
                        
                        for (int direction = 0; direction < 8; direction++) {
                            Point nextPoint = new Point(
                                point.x + deltaX[direction],
                                point.y + deltaY[direction]
                            );
                            
                            if (!inBound(nextPoint, grid)) {
                                continue;
                            }
                            
                            queue.offer(nextPoint);
                            // mark the point not accessible
                            grid[nextPoint.x][nextPoint.y] = true;
                        }
                    }
                    steps++;
                }
                
                return -1;
            }
            
            private boolean inBound(Point point, boolean[][] grid) {
                if (point.x < 0 || point.x >= n) {
                    return false;
                }
                if (point.y < 0 || point.y >= m) {
                    return false;
                }
                return (grid[point.x][point.y] == false);
            }
        }
        
        //version 硅谷算法班
        public class Solution {
            /**
             * @param grid: a chessboard included 0 (false) and 1 (true)
             * @param source: a point
             * @param destination: a point
             * @return: the shortest path
             */
            public int shortestPath(boolean[][] grid, Point source, Point destination) {
                // write your code here
                if (grid == null || grid.length == 0 || grid[0].length == 0) {
                    return -1;
                }
        
                int[] dx = {1, 1, -1, -1, 2, 2, -2, -2};
                int[] dy = {2, -2, 2, -2, 1, -1, 1, -1};
        
                Queue<Point> q = new LinkedList<>();
                boolean[][] v = new boolean[grid.length][grid[0].length];  //Set<Point> v will TLE
        
                q.offer(source);
                v[source.x][source.y] = true;
        
                if (source.x == destination.x && source.y == destination.y) {
                    return 0;
                }
        
                int dist = 0;
        
                while (!q.isEmpty()) {
                    dist++;
                    int size = q.size();
                    for (int i = 0; i < size; i++) {
                        Point cur = q.poll();
                        for (int k = 0; k < 8; k++) {
                            int nx = cur.x + dx[k];
                            int ny = cur.y + dy[k];
                            if (0 <= nx && nx < grid.length && 0 <= ny && ny < grid[0].length && !grid[nx][ny] && !v[nx][ny]) {
                                if (nx == destination.x && ny == destination.y) {
                                    return dist;
                                }
                                q.offer(new Point(nx, ny));
                                v[nx][ny] = true;
                            }
                        }
                    }
        
                }
                return -1;
            }
        }
    `
}

export default Knight_Shortest_Path
