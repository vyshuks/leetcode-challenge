/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length==0) {
        return 0;
    }

    const num_set = new Set(nums);
    let result = 1;

    for(num of num_set) {
        if(!num_set.has(num-1)){
            let next_num = num+1;
            while(num_set.has(next_num)){
                next_num++;

            }
            result = Math.max(result, next_num-num);
        }
    }

    return result;

};