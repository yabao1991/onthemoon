const Merge_Two_Sorted_Arrays = {
    id: '0047',
    name: 'Merge_Two_Sorted_Arrays',
    refLink: [
        'https://www.jiuzhang.com/solution/merge-two-sorted-arrays/',
        'https://www.lintcode.com/problem/merge-two-sorted-arrays/description',
        'https://leetcode-cn.com/problems/merge-sorted-array/solution/javascript-he-bing-liang-ge-you-xu-shu-zu-by-rhino/'

    ],
    level: 'Hard',
    tag: [],
    notes: ``,
    jsSolution: `
        // 合并两个有序升序的整数数组A和B变成一个新的数组。新数组也要有序。
        // https://www.lintcode.com/problem/merge-two-sorted-arrays/description
        
        const mergeSortedArray = function (A, B) {
            var ret = [];
            var i, j
            for (len = 0, i = 0, j = 0; i < A.length && j < B.length; ) {
                if (A[i] < B[j]) {
                    ret.push(A[i++]);
                } else {
                    ret.push(B[j++]);
                }
            }
            while (i < A.length) {
                ret.push(A[i++]);
            }
            while (j < B.length) {
                ret.push(B[j++]);
            }
            return ret;
        }
    `
}

export default Merge_Two_Sorted_Arrays
