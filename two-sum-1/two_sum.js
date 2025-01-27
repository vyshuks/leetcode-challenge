/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let _map = {};

    let i = 0;
    for(num of nums) {
        let n = target - num;
        if(n in _map) {
            return [i, _map[n]];
        }
        _map[num] = i;
        i+=1;
    }
};