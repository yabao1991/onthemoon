const Combination_Sum = {
    id: '0035',
    name: 'Combination_Sum', 
    refLink: [
        'https://leetcode-cn.com/problems/combination-sum/solution/39-zu-he-zong-he-by-alexer-660/',
        'https://www.lintcode.com/problem/combination-sum/description',
        'https://www.jiuzhang.com/solution/combination-sum/'
    ],
    level: 'Easy',
    tag: [],
    notes: ``,
    jsSolution: `
        // Given a set of candidtate numbers candidates and a target number target. Find all unique combinations in candidates where the numbers sums to target.

        // The same repeated number may be chosen from candidates unlimited number of times.
        
        // 在线评测地址: https://www.lintcode.com/problem/combination-sum/

        解法一：递归回溯
        类似题型
        46. 全排列
        递归代码模板
        参看各类算法模板 - 递归一节 - Python&Java版
        思路
        由题可知，原数组
        元素不重复
        寻找一个符合条件的组合
        且原数组的单个元素可以重复使用
        只要结果中的子组合互不相同即可
        求解
        且原数组的单个元素可以重复使用
        意味着下一个for循环中的元素选取，要从前一个元素开始，因为可以重复使用，不然如果跟着for的自增变量i走，会漏掉可能解
        将自增变量i传递下去
        终止条件
        target 一一减去符合组合的元素，最终为 0 ，才是一个符合题意的组合
        /**
         * @param {number[]} candidates
         * @param {number} target
         * @return {number[][]}
         */
        var combinationSum = function(candidates, target) {
            let n = candidates.length;
            let res = [];
            let tmpPath = [];
            let backtrack = (tmpPath,target,start) => {
                if(target < 0){
                    return;
                }
                if(target == 0){
                    res.push(tmpPath);
                    return;
                }
                for(let i = start;i < n;i++){
                    tmpPath.push(candidates[i]);
                    backtrack(tmpPath.slice(),target - candidates[i],i);
                    tmpPath.pop();
                }
            }
            backtrack(tmpPath,target,0);
            return res;
        };
        解法二：递归回溯 + 减枝
        类似题型
        47. 全排列 II - 解法二
        重复问题
        [1,3,5,6] target = 8
        当tmpPath = [1,3]时
        target = 8 - 1 - 3 = 4
        此时 4 < 5
        因此之后比5更大的元素也是不合题意的，对于所有组合中以[1,3]为首的组合无需再进行下一步组合，直接进行下一轮组合
        当以[1,3]两个元素为尾部或中间部分的可能组合就有可能是正确的
        结果
        [[1,1,1,1,1,1,1,1],[1,1,1,1,1,3],[1,1,1,5],[1,1,3,3],[1,1,6],[3,5]]
        剪枝
        排序原数组
        如重复问题示例操作，翻译成代码即可
        也说明了排序的意义所在
        /**
         * @param {number[]} candidates
         * @param {number} target
         * @return {number[][]}
         */
        var combinationSum = function(candidates, target) {
            let n = candidates.length;
            let res = [];
            let tmpPath = [];
            candidates = candidates.sort((a,b) => {return a - b})
            let backtrack = (tmpPath,target,start) => {
                if(target == 0){
                    res.push(tmpPath);
                    return;
                }
                for(let i = start;i < n;i++){
                    if(target < candidates[i]) break;
                    tmpPath.push(candidates[i]);
                    backtrack(tmpPath.slice(),target - candidates[i],i);
                    tmpPath.pop();
                }
            }
            backtrack(tmpPath,target,0);
            return res;
        };
    `
}

export default Combination_Sum
