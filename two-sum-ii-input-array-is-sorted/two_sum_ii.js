/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length-1;
    while(left < right) {
        let s = numbers[left] + numbers[right];
        if(s==target) {
            return [left+1, right+1]
        }else if(s > target) {
            right--;
        }else {
            left++;
        }
    }

    return null;
};