const First_Bad_Version = {
    id: '0008',
    name: 'First_Bad_Version',
    refLink: [
        'https://www.jiuzhang.com/solution/first-bad-version/',
        'https://www.jiuzhang.com/solutions/first-bad-version/',
        'https://leetcode-cn.com/problems/first-bad-version/solution/er-fen-cha-zhao-by-cctt-2/'
    ],
    level: 'Easy',
    tag: [
        'Binary Search',
    ],
    notes: ``,
    jsSolution: `
        // The code base version is an integer start from 1 to n. One day, 
        // someone committed a bad version in the code case, 
        // so it caused this version and the following versions are all failed in the unit tests. Find the first bad version.

        // You can call isBadVersion to help you determine which version is the first bad one. 
        // The details interface can be found in the code's annotation part.
        
        // 在线评测地址: https://www.lintcode.com/problem/first-bad-version/

        /**
         * @param n: An integer
         * @return: An integer which is the first bad version.
         */
        const findFirstBadVersion = function (n) {
            // write your code here
            var left = 1;
            var right = n;
            while(left<right){
                mid = left+Math.floor((right-left)/2);
                if(isBadVersion(mid)){
                    right = mid;
                }else{
                    left=mid+1;
                }
            }
            return left;
        }
    `,
}

export default First_Bad_Version