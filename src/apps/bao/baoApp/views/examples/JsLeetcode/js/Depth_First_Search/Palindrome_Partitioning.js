const Palindrome_Partitioning = {
    id: '0037',
    name: 'Palindrome_Partitioning',
    refLink: [
        'https://leetcode-cn.com/problems/palindrome-partitioning/solution/jschao-guo-90dong-tai-gui-hua-shen-du-you-xian-sou/',
        'https://www.lintcode.com/problem/palindrome-partitioning/description',
        'https://www.jiuzhang.com/solution/palindrome-partitioning/'
    ],
    level: 'Medium',
    tag: [],
    notes: ``,
    jsSolution: `
        // Given a string s. Partition s such that every substring in the partition is a palindrome.

        // Return all possible palindrome partitioning of s.
        
        // 在线评测地址: https://www.lintcode.com/problem/palindrome-partitioning/

        function isPalindrome(s) {
            let dp = new Array(s.length)
            for (let i = 0; i < dp.length; i++) {
                dp[i] = new Array(s.length).fill(false)
            }
            for (let l = 1; l <= s.length; l++) {
                for (let i = 0; i <= s.length - l; i++) {
                    let j = i + l - 1
                    dp[i][j] = s[i] == s[j] && (l < 3 || dp[i + 1][j - 1])
                }
            }
            return dp
        }
        
        var partition = function (s) {
            let dp = isPalindrome(s)
            let ans = []
        
            function dfs(router) {
                if (router.length > 0 && router[router.length - 1][1] == s.length - 1) {
                    ans.push(router)
                    return
                }
                let row = router[router.length - 1]
                for (let j = row[1] + 1; j < s.length; j++) {
                    if (dp[row[1] + 1][j]) {
                        dfs([...router].concat([[row[1] + 1, j]]))
                    }
                }
            }
        
            for (let j = 0; j < s.length; j++) {
                if (dp[0][j]) dfs([[0, j]])
            }
            
            return ans.map((item) => {
                return item.reduce((pre, k) => {
                   return pre.concat([s.substr(k[0], k[1] - k[0] + 1)])
                }, [])
            })
        };
    `
}

export default Palindrome_Partitioning
