const isValidParentheses = {
    id: '0003',
    name: 'isValidParentheses',
    refLink: [
        'https://www.lintcode.com/problem/valid-parentheses/description',
        'https://www.jiuzhang.com/solution/valid-parentheses/',
        'https://leetcode-cn.com/problems/valid-parentheses/solution/javascript-you-xiao-de-gua-hao-by-rhinoc/'
    ],
    level: 'Easy',
    tag: [],
    notes: ``,
    jsSolution: `
        // Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
        // determine if the input string is valid.

        // The brackets must close in the correct order, "()" 
        // and "()[]{}" are all valid but "(]" and "([)]" are not.

        // 在线评测地址: https://www.lintcode.com/problem/valid-parentheses/

        var isValid = function(s) {
            let stack = [];
            var obj = {
                "]": "[",
                "}": "{",
                ")": "(",
            };
        
            for(var i = 0; i < s.length; i++) {
                if(s[i] === "[" || s[i] === "{" || s[i] === "(") {
                    stack.push(s[i]);
                } else {
                    var key = stack.pop();
                    if(obj[key] !== s[i]) {
                        return false;
                    }
                }
            }
            if(!stack.length) {
                return true;
            }
            return false;
        };

        var isValid = function(s) {
            var stack = [];
            var map = new Map();
            map.set("(",")");
            map.set("{","}");
            map.set("[","]");
            for(var i = 0;i < s.length;i++){
                if(!map.get(s[i])){
                    if(stack.length == 0){
                        return false;
                    }
                    var topEle = stack.pop();
                    if(map.get(topEle) != s[i]){
                        return false;
                    }
                }else{
                    stack.push(s[i]);
                }
            }
            return stack.length == 0;
        };
    `
}

export default isValidParentheses


// var isValid = function(s) {
//     let stack = [];
//     var obj = {
//         "]": "[",
//         "}": "{",
//         ")": "(",
//     };

//     for(var i = 0; i < s.length; i++) {
//         if(s[i] === "[" || s[i] === "{" || s[i] === "(") {
//             stack.push(s[i]);
//         } else {
//             var key = stack.pop();
//             if(obj[key] !== s[i]) {
//                 return false;
//             }
//         }
//     }
//     if(!stack.length) {
//         return true;
//     }
//     return false;
// };