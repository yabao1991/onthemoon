const Search_in_a_Big_Sorted_Array = {
    id: '0012',
    name: 'Search_in_a_Big_Sorted_Array',
    refLink: [
        'https://www.lintcode.com/problem/search-in-a-big-sorted-array/',
        'https://www.lintcode.com/problem/search-in-a-big-sorted-array/description',
    ],
    level: 'Easy',
    tag: [
        'Binary Search',
    ],
    notes: `JAVA`,
    jsSolution: `
        // Given a big sorted array with non-negative integers sorted by non-decreasing order. 
        // The array is so big so that you can not get the length of the whole array directly, 
        // and you can only access the kth number by ArrayReader.get(k) (or ArrayReader->get(k) for C++).

        // Find the first index of a target number. 
        // Your algorithm should be in O(log k), where k is the first index of the target number.
        
        // Return -1, if the number doesn't exist in the array.
        
        // 在线评测地址: https://www.lintcode.com/problem/search-in-a-big-sorted-array/

        public class Solution {
            /*
             * @param reader: An instance of ArrayReader.
             * @param target: An integer
             * @return: An integer which is the first index of target.
             */
            public int searchBigSortedArray(ArrayReader reader, int target) {
                int firstElement = reader.get(0);
                if (firstElement == target) 
                    return 0;
                else if (firstElement > target)
                    return -1;
                
                int idx = 0, jump = 1;
                while (jump != 0) {
                    while (jump != 0 && reader.get(idx + jump) >= target)   // 越界时返回INT_MAX, 必然不小于target
                        jump >>= 1;
                    idx += jump;
                    jump <<= 1;     // 当jump为0时, 左移一位不影响它的值, 不影响循环结束
                }
                
                if (reader.get(idx + 1) == target)
                    return idx + 1;
                else
                    return -1;
            }
        }
        
        /////////////// 方法2 二分
        
        /**
         * Definition of ArrayReader:
         * 
         * public class ArrayReader {
         * public int get(int index) {
         *          // return the number on given index, 
         *          // return 2147483647 if the index is invalid.
         *     }
         * };
         */
        public class Solution {
            /*
             * @param reader: An instance of ArrayReader.
             * @param target: An integer
             * @return: An integer which is the first index of target.
             */
            public int searchBigSortedArray(ArrayReader reader, int target) {
                int l = 0, r = 1, mid;
                while (reader.get(r) < target)     // 越界返回INT_MAX, 必然大于target, 所以没有关系
                    r <<= 1;
                
                while (l < r) {
                    mid = (l + r) >> 1;
                    if (reader.get(mid) >= target)
                        r = mid;
                    else
                        l = mid + 1;
                }
                
                if (reader.get(l) == target)
                    return l;
                else
                    return -1;
            }
        }
    `,
}

export default Search_in_a_Big_Sorted_Array