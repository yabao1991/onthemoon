const search_in_rotated_sorted_array = {
    id: '0013',
    name: 'search_in_rotated_sorted_array',
    refLink: [
        'https://www.lintcode.com/problem/search-in-rotated-sorted-array/description',
        'https://www.jiuzhang.com/solution/search-in-rotated-sorted-array/#tag-highlight-lang-javascript',
        'https://leetcode-cn.com/problems/search-in-rotated-sorted-array/solution/'
    ],
    level: 'Medium',
    tag: [
        'Binary Search',
    ],
    notes: ``,
    jsSolution: `
        // Suppose a sorted array is rotated at some pivot unknown to you beforehand.

        // (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
        
        // You are given a target value to search. If found in the array return its index, otherwise return -1.
        
        // You may assume no duplicate exists in the array.
        
        // 在线评测地址: https://www.lintcode.com/problem/search-in-rotated-sorted-array/

        /**
         * @param A: an integer rotated sorted array
         * @param target: an integer to be searched
         * @return: an integer
         */

        const search = function (A, target) {
            if (A === null || A.length === 0) {
                return -1;
            }
            var start = 0;
            var end = A.length - 1;
            var mid;
            while (start + 1 < end) {
                mid = start + Math.floor((end - start) / 2);
                if (A[mid] === target) {
                    return mid;
                }
                if (A[start] < A[mid]) {
                    if (A[start] <= target && target <= A[mid]) {
                        end = mid;
                    } else {
                        start = mid;
                    }
                } else {
                    if (A[mid] <= target && target <= A[end]) {
                        start = mid;
                    } else {
                        end = mid;
                    }
                }
            }
            if (A[start] === target) {
                return start;
            }
            if (A[end] === target) {
                return end;
            }
            return -1;
        }
    `,
}

export default search_in_rotated_sorted_array