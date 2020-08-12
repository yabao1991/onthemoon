const Word_Ladder_II = {
    id: '0041',
    name: 'Word_Ladder_II',
    refLink: [
        'https://www.lintcode.com/problem/word-ladder-ii/description',
        'https://leetcode-cn.com/problems/word-ladder-ii/solution/javascript-jian-dan-yi-dong-bfs-dfs-by-jsyt/'
    ],
    level: 'Hard',
    tag: [],
    notes: ``,
    jsSolution: `
        // Given two words (start and end), and a dictionary, find all shortest transformation sequence(s) from start to end, output sequence in dictionary order.
        // Transformation rule such that:
        
        // Only one letter can be changed at a time
        // Each intermediate word must exist in the dictionary
        // 在线评测地址: https://www.lintcode.com/problem/word-ladder-ii/

        先用 BFS 求出最短距离
        再用 DFS 求出最短距离路径

        代码
        /**
         * @param {string} beginWord
         * @param {string} endWord
         * @param {string[]} wordList
         * @return {string[][]}
         */
        var findLadders = function(beginWord, endWord, wordList) {
            let wordSet = new Set(wordList);
            if (!wordSet.has(endWord)) return [];
            wordSet.delete(beginWord);
            let beginSet = new Set([beginWord]);
            let map = new Map();
            let distance = 0;
            let minDistance = 0;
            while(beginSet.size) {
                if (beginSet.has(endWord)) break;
                let trySet = new Set();
                for (let word of beginSet) {
                    let mapSet = new Set();
                    for (let i = 0; i < word.length; i++) {
                        for (let j = 0; j < 26; j++) {
                            let tryWord = word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);
                            if (!minDistance && tryWord === endWord) minDistance = distance + 1;
                            if (wordSet.has(tryWord)) {
                                trySet.add(tryWord);
                                mapSet.add(tryWord);
                            }
                        }
                    }
                    map.set(word, mapSet);
                }
                distance++;
                for (let w of trySet) {
                    wordSet.delete(w);
                }
                beginSet = trySet;
            }
            let ans = [];
            let path = [beginWord];
            dfs(beginWord, endWord, ans, path, map, minDistance, 0);
            return ans;
        };

        function dfs (beginWord, endWord, ans, path, map, minDistance, distance) {
            if (distance > minDistance) return ;
            if (beginWord === endWord) {
                ans.push(path.slice());
            }
            let words = map.get(beginWord)
            if (words) {
                for (let word of words) {
                    path.push(word)
                    dfs(word, endWord, ans, path, map, minDistance, distance + 1);
                    path.pop();
                }
            }
        }
    `
}

export default Word_Ladder_II
