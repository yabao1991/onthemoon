const Kth_Smallest_Numbers_in_Unsorted_Array = {
    id: '0058',
    name: 'Kth_Smallest_Numbers_in_Unsorted_Array', 
    refLink: [
        'https://www.lintcode.com/problem/kth-smallest-numbers-in-unsorted-array/description',
        'https://www.jiuzhang.com/solution/kth-smallest-numbers-in-unsorted-array/#tag-highlight',

    ],
    level: 'Hard',
    tag: [],
    notes: ``,
    jsSolution: `
        // Find the kth smallest number in an unsorted integer array.

        // 在线评测地址: https://www.lintcode.com/problem/kth-smallest-numbers-in-unsorted-array/
        
        class Solution {
            /*
            * @param k an integer
            * @param nums an integer array
            * @return kth smallest element
            */
            public int kthSmallest(int k, int[] nums) {
                return quickSelect(nums, 0, nums.length - 1, k - 1);
            }

            public int quickSelect(int[] A, int start, int end , int k) {
                if (start == end)
                    return A[start];
                
                int left = start, right = end;
                int pivot = A[(start + end) / 2];

                while (left <= right) {
                    while (left <= right && A[left] < pivot) {
                        left++;
                    }
                    while (left <= right && A[right] > pivot) {
                        right--;
                    }
                    if (left <= right) {
                        int temp = A[left];
                        A[left] = A[right];
                        A[right] = temp;
                        
                        left++;
                        right--;
                    }
                }

                if (right >= k && start <= right)
                    return quickSelect(A, start, right, k);
                else if (left <= k && left <= end)
                    return quickSelect(A, left, end, k);
                else
                    return A[k];
            }
        };
    `
}

export default Kth_Smallest_Numbers_in_Unsorted_Array
