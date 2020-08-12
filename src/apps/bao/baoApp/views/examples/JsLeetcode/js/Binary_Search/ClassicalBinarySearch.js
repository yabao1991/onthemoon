const ClassicalBinarySearch = {
    id: '0004',
    name: 'Classical Binary Search',
    refLink: [
        'https://www.lintcode.com/problem/classical-binary-search/'
    ],
    level: 'Easy',
    tag: [
        'Binary Search',
    ],
    notes: ``,
    jsSolution: `
        // Binary search is a famous question in algorithm.

        // For a given sorted array (ascending order) and a target number, 
        // find the first index of this number in O(log n) time complexity.
        
        // If the target number does not exist in the array, return -1.
        
        // Example
        // If the array is [1, 2, 3, 3, 4, 5, 10], for given target 3, return 2.

        function findPosition(nums, target) {
            if(!nums || !nums.length) return -1
            let start = 0
            let end = nums.length - 1

            // while loop to only reduce the range, 
            // check the value outside the while loop later

            while(start + 1 < end){
                let mid = Math.floor((start + end)/2)
                if(nums[mid] === target){
                    return mid
                } else if (nums[mid] < target){
                    start = mid + 1
                } else if (nums[mid] > target){
                    end = mid - 1
                }
          
            }
          
            if(nums[start] === target){
              return start
            }
            if(nums[end] === target){
              return end
            }
            return -1
        }
    `,
}

export default ClassicalBinarySearch