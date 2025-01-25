/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let is_seen = new Set();
    for(num of nums) {
        if (is_seen.has(num)) {
            return true;
        }
        is_seen.add(num);
    }
    return false;
};