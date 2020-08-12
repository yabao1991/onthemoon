const triangle_count = {
    id: '0055',
    name: 'triangle_count', 
    refLink: [
        'https://www.jiuzhang.com/solution/triangle-count/#tag-highlight',
        'https://www.lintcode.com/problem/triangle-count/description'

    ],
    level: 'Easy',
    tag: [],
    notes: `JAVA only`,
    jsSolution: `
        // Given an array of integers, how many three numbers can be found in the array, so that we can build an triangle whose three edges length is the three numbers that we find?

        // 在线评测地址: https://www.lintcode.com/problem/triangle-count/
            
        public class Solution {
            /**
             * @param S: A list of integers
             * @return: An integer
             */
            public int triangleCount(int S[]) {
                int left = 0, right = S.length - 1;
                int ans = 0;
                Arrays.sort(S);
                for (int i = 0; i < S.length; i++) {
                    left = 0;
                    right = i - 1;
                    while (left < right) {
                        if (S[left] + S[right] > S[i]) {
                            ans = ans + (right - left);
                            right --;
                        } else {
                            left ++;
                        }
                    }
                }
                return ans;
            }
        }
    `
}

export default triangle_count
