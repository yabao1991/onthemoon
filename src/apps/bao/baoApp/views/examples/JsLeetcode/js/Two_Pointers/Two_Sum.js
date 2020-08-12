const Two_Sum = {
    id: '0052',
    name: 'Two_Sum', 
    refLink: [
        'https://www.lintcode.com/problem/two-sum/description',
        'https://www.jiuzhang.com/solution/two-sum/#tag-highlight-lang-javascript',
        'https://leetcode-cn.com/problems/two-sum/solution/javascriptes6jie-jue-fang-shi-by-a-xing-29/'
    ],
    level: 'Easy',
    tag: [],
    notes: ``,
    jsSolution: `
        // Given an array of integers, find two numbers such that they add up to a specific target number.

        // The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are zero-based.
        
        // 在线评测地址: https://www.lintcode.com/problem/two-sum/
        
        const twoSum = function (numbers, target) {
            var map = []
            var i;
            var res;
            for (i = 0; i < numbers.length; i++) {
                if (map.hasOwnProperty(numbers[i])) {
                    res = [];
                    res[0] = map[numbers[i]];
                    res[1] = i;
                    return res;
                }
                map[target - numbers[i]] = i;
            }
            res = [];
            return res;
        }
    `
}

export default Two_Sum
