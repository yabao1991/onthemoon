/**
 * @param numbers: an array of integers
 * @param k: an integer
 * @return: the number of unique k-diff pairs
 */
// const findPairs = function (numbers, k) {
//     // Write your code here
// }


/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number}
 */
// https://www.lintcode.com/problem/k-diff-pairs-in-an-array/description

const findPairs = function(numbers, k) {
	if(numbers.length === 0 || k < 0) return 0
	let myMap = new Map(),
		count = 0
	//Get wordcount
	for(num of numbers){
		myMap.set(num,(myMap.get(num)+1) || 1)
	}
	
	//search solutions
	myMap.forEach((item,index) =>{
		if(k === 0){
			if(item > 1) count++
		}
		else{
			if(myMap.has(index+k)) count++
		}
	})

	return count
};