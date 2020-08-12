const Sort_Colors = {
    id: '0059',
    name: 'Sort_Colors',  
    refLink: [
        'https://www.lintcode.com/problem/sort-colors/description',
        'https://www.jiuzhang.com/solution/sort-colors/#tag-highlight-lang-javascript',
        'https://leetcode-cn.com/problems/sort-colors/solution/75-yan-se-fen-lei-by-alexer-660/'
    ],
    level: 'Hard',
    tag: [],
    notes: ``,
    jsSolution: `
        // Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, 
        // with the colors in the order red, white and blue.

        // Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

        // 在线评测地址: https://www.lintcode.com/problem/sort-colors/
        
        const sortColors = function (nums) {
            if (nums === null || nums.length <= 1) {
                return;
            }
            var pl = 0;
            var pr = nums.length - 1;
            var i = 0;
            var tmp;
            while (i <= pr) {
                if (nums[i] === 0) {
                    tmp = nums[i];
                    nums[i] = nums[pl];
                    nums[pl] = tmp;
                    pl++;
                    i++;
                } else if(nums[i] === 1) {
                    i++;
                } else {
                    tmp = nums[i];
                    nums[i] = nums[pr];
                    nums[pr] = tmp;
                    pr--;
                }
            }
        }

        解法一：计数排序
        思路完全同 - 经典排序算法讲解 - 计数排序
        /**
         * @param {number[]} nums
         * @return {void} Do not return anything, modify nums in-place instead.
         */
        var sortColors = function(nums) {
            let countSort = (arr,maxVal) => {
                let bucketLen = maxVal + 1;
                let bucket = new Array(bucketLen).fill(0);
                let sortedI = 0;
                let arrLen = arr.length;
                for(let i = 0;i < arrLen;i++){
                    bucket[arr[i]]++;
                }
                for(let j = 0;j < bucketLen;j++){
                    while(bucket[j] > 0){
                        arr[sortedI++] = j;
                        bucket[j]--;
                    }
                }
                return arr;
            }
            return countSort(nums,2);
        };
        解法二：两路替换
        /**
         * @param {number[]} nums
         * @return {void} Do not return anything, modify nums in-place instead.
         */
        var sortColors = function(nums) {
            let left = 0;
            let n = nums.length;
            for(let i = 0;i < n;i++){
                if(nums[i] === 0){
                    [nums[left],nums[i]] = [nums[i],nums[left]];
                    left++;
                }
            }
            let right = n - 1;
            for(let i = right;i >= left;i--){
                if(nums[i] === 2){
                    [nums[right],nums[i]] = [nums[i],nums[right]];
                    right--;
                }
            }
        };
        解法三：一次遍历
        解法二的 while 版
        /**
         * @param {number[]} nums
         * @return {void} Do not return anything, modify nums in-place instead.
         */
        var sortColors = function(nums) {
            let left = 0;
            let right = nums.length - 1;
            let i = 0;
            while(i <= right){
                if(nums[i] === 0){
                    [nums[left],nums[i]] = [nums[i],nums[left]];
                    left++;
                    i++;
                }
                else if(nums[i] === 2){
                    [nums[right],nums[i]] = [nums[i],nums[right]];
                    right--;
                }
                else {
                    i++;
                }
            }
        };
        或者这样写也可
        /**
         * @param {number[]} nums
         * @return {void} Do not return anything, modify nums in-place instead.
         */
        var sortColors = function(nums) {
            let left = 0;
            let right = nums.length - 1;
            let i = 0;
            while(i <= right){
                while(nums[i] == 2 && i < right){
                    [nums[right],nums[i]] = [nums[i],nums[right]];
                    right--;
                }
                while(nums[i] == 0 && i > left){
                    [nums[left],nums[i]] = [nums[i],nums[left]];
                    left++;
                }
                i++;
            }
        };
    `
}

export default Sort_Colors
