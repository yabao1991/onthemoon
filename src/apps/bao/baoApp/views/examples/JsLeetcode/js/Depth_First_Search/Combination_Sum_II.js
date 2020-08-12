const Combination_Sum_II = {
    id: '0036',
    name: 'Combination_Sum_II', 
    refLink: [
        'https://www.lintcode.com/problem/combination-sum-ii/description',
        'https://leetcode-cn.com/problems/combination-sum-ii/solution/40-zu-he-zong-he-ii-by-alexer-660/',
        'https://www.jiuzhang.com/solution/combination-sum-ii/'
    ],
    level: 'Easy',
    tag: [],
    notes: ``,
    jsSolution: `
        // Given an array num and a number target. Find all unique combinations in num where the numbers sum to target.

        // 在线评测地址: https://www.lintcode.com/problem/combination-sum-ii/

        const combinationSum2 = function(num, target) {
            let n = num.length;
            let res = [];
            let tmpPath = [];
            num = num.sort((a,b) => {return a - b})
            let backtrack = (tmpPath,target,start) => {
                if(target == 0){
                    res.push(tmpPath);
                    return;
                }
                for(let i = start;i < n;i++){
                    if(target < num[i]) break;
                    if(i > start && num[i-1] == num[i]) continue;
                    tmpPath.push(num[i]);
                    backtrack(tmpPath.slice(),target - num[i],i + 1);
                    tmpPath.pop();
                }
            }
            backtrack(tmpPath,target,0);
            return res;
        };
    `
}

export default Combination_Sum_II
