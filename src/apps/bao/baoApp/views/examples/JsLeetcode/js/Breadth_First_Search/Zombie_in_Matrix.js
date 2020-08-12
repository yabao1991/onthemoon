const Zombie_in_Matrix = {
    id: '0033',
    name: 'Zombie_in_Matrix',
    refLink: [
        'https://www.lintcode.com/problem/zombie-in-matrix/description',
        'https://www.jiuzhang.com/solution/zombie-in-matrix/#tag-highlight'
    ],
    level: 'Medium',
    tag: [
        ''
    ],
    notes: `JAVA only`,
    jsSolution: `
        // Given a 2D grid, each cell is either a wall 2, a zombie 1 or people 0 (the number zero, one, two).Zombies can turn the nearest people(up/down/left/right) into zombies every day, but can not through wall. How long will it take to turn all people into zombies? Return -1 if can not turn all people into zombies.

        // 在线评测地址: https://www.lintcode.com/problem/zombie-in-matrix/


        class Coordinate {
            int x, y;
            public Coordinate(int x, int y) {
                this.x = x;
                this.y = y;
            }
        }
        
        public class Solution {
            public int PEOPLE = 0;
            public int ZOMBIE = 1;
            public int WALL = 2;
            
            public int[] deltaX = {1, 0, 0, -1};
            public int[] deltaY = {0, 1, -1, 0};
             
            /**
             * @param grid a 2D integer grid
             * @return an integer
             */
            public int zombie(int[][] grid) {
                if (grid == null || grid.length == 0 || grid[0].length == 0) {
                    return 0;
                }
                
                int n = grid.length;
                int m = grid[0].length;
                
                // initialize the queue & count people
                int people = 0;
                Queue<Coordinate> queue = new LinkedList<>();
                for (int i = 0; i < n; i++) {
                    for (int j = 0; j < m; j++) {
                        if (grid[i][j] == PEOPLE) {
                            people++;
                        } else if (grid[i][j] == ZOMBIE) {
                            queue.offer(new Coordinate(i, j));
                        }
                    }
                }
                
                // corner case
                if (people == 0) {
                    return 0;
                }
                
                // bfs
                int days = 0;
                while (!queue.isEmpty()) {
                    days++;
                    int size = queue.size();
                    for (int i = 0; i < size; i++) {
                        Coordinate zb = queue.poll();
                        for (int direction = 0; direction < 4; direction++) {
                            Coordinate adj = new Coordinate(
                                zb.x + deltaX[direction],
                                zb.y + deltaY[direction]
                            );
                            
                            if (!isPeople(adj, grid)) {
                                continue;
                            }
                            
                            grid[adj.x][adj.y] = ZOMBIE;
                            people--;
                            if (people == 0) {
                                return days;
                            }
                            queue.offer(adj);
                        }
                    }
                }
                
                return -1;
            }
            
            private boolean isPeople(Coordinate coor, int[][] grid) {
                int n = grid.length;
                int m = grid[0].length;
                
                if (coor.x < 0 || coor.x >= n) {
                    return false;
                }
                if (coor.y < 0 || coor.y >= m) {
                    return false;
                }
                return (grid[coor.x][coor.y] == PEOPLE);
            }
        }
        
        //version 硅谷算法班
        public class Solution {
            /**
             * @param grid: a 2D integer grid
             * @return: an integer
             */
            public int zombie(int[][] grid) {
                // write your code here
                if (grid == null || grid.length == 0 || grid[0].length == 0) {
                    return 0;
                }
                Queue<Integer> qx = new LinkedList<>();
                Queue<Integer> qy = new LinkedList<>();
                boolean[][] v = new boolean[grid.length][grid[0].length];
        
                for (int i = 0; i < grid.length; i++) {
                    for (int j = 0; j < grid[0].length; j++) {
                        if (grid[i][j] == 1) {
                            qx.offer(i);
                            qy.offer(j);
                            v[i][j] = true;
                        }
                    }
                }
        
                int[] dx = {1, -1, 0, 0};
                int[] dy = {0, 0, 1, -1};
        
                int dist = 0;
                while (!qx.isEmpty()) {
                    dist++;
                    int size = qx.size();
                    for (int i = 0; i < size; i++) {
                        int cx = qx.poll();
                        int cy = qy.poll();
                        for (int k = 0; k < 4; k++) {
                            int nx = cx + dx[k];
                            int ny = cy + dy[k];
                            if (0 <= nx && nx < grid.length && 0 <= ny && ny < grid[0].length && grid[nx][ny] == 0 && !v[nx][ny]) {
                                qx.offer(nx);
                                qy.offer(ny);
                                v[nx][ny] = true;
                            }
                        }
                    }
                }
                dist--;
        
                for (int i = 0; i < grid.length; i++) {
                    for (int j = 0; j < grid[0].length; j++) {
                        if (grid[i][j] == 0 && !v[i][j]) {
                            return -1;
                        }
                    }
                }
        
                return dist;
            }
        }
    `
}

export default Zombie_in_Matrix
