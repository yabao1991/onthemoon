const _3Sum_Closest = {
    id: '0057',
    name: '_3Sum_Closest', 
    refLink: [
        'https://www.jiuzhang.com/solution/3sum-closest/',
        'https://www.lintcode.com/problem/3sum-closest/description',
        'https://leetcode-cn.com/problems/3sum-closest/solution/16-zui-jie-jin-de-san-shu-zhi-he-by-alexer-660/'
    ],
    level: 'Medium',
    tag: [],
    notes: ``,
    jsSolution: `
        // Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers.

        // 在线评测地址: https://www.lintcode.com/problem/3sum-closest/
        
        /**
         * @param numbers: Give an array numbers of n integer
         * @param target: An integer
         * @return: return the sum of the three integers, the sum closest target.
         */

        const threeSumClosest = function(numbers, target) {
            numbers.sort((a,b) => a - b);
            let res = numbers[0] + numbers[1] + numbers[2];
            let n = numbers.length;
            for(let i = 0;i < n;i++){
                let left = i + 1;
                let right = n - 1;
                while(left < right){
                    let sum = numbers[i] + numbers[left] + numbers[right];
                    if(Math.abs(res - target) > Math.abs(sum - target)){
                        res = sum;
                    }else if(sum > target){
                        right--;
                    }else if(sum < target){
                        left++;
                    }else if(sum === target){
                        return res;
                    }
                }
            }
            return res;
        };
    `
}

export default _3Sum_Closest
