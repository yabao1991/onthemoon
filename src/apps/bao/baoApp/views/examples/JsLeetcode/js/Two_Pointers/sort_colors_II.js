const sort_colors_II = {
    id: '0060',
    name: 'sort_colors_II', 
    refLink: [
        'https://www.jiuzhang.com/solution/sort-colors-ii/#tag-highlight-lang-javascript',
        'https://www.lintcode.com/problem/sort-colors-ii/description',
        
    ],
    level: 'Medium',
    tag: [],
    notes: ``,
    jsSolution: `
        // Given an array of n objects with k different colors (numbered from 1 to k), sort them so that objects of the same color are adjacent, with the colors in the order 1, 2, ... k.

        // 在线评测地址: https://www.lintcode.com/problem/sort-colors-ii/
        
        /**
         * @param colors: A list of integer
         * @param k: An integer
         * @return: 
         */
        const sortColors2 = function (colors, k) {
            if (colors === null || colors.length === 0) {
                    return;
            }
            rainbowSort = function(colors, left, right, colorFrom, colorTo) {
                if (colorFrom === colorTo) {
                    return;
                }
                if (left >= right) {
                    return;
                }
                var colorMid = Math.floor((colorFrom + colorTo) / 2);
                var l = left, r = right;
                var temp;
                while (l <= r) {
                    while (l <= r && colors[l] <= colorMid) {
                        l++;
                    }
                    while (l <= r && colors[r] > colorMid) {
                        r--;
                    }
                    if (l <= r) {
                        temp = colors[l];
                        colors[l] = colors[r];
                        colors[r] = temp;
                        
                        l++;
                        r--;
                    }
                }
                
                rainbowSort(colors, left, r, colorFrom, colorMid);
                rainbowSort(colors, l, right, colorMid + 1, colorTo);
            }
            rainbowSort(colors, 0, colors.length - 1, 1, k);
        }
    `
}

export default sort_colors_II
