/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const l = nums.length;
    const result = Array(l).fill(l);
    
    let pre=1, post = 1;

    for(let i=0; i<l; i++) {
        result[i] = pre;
        pre = pre * nums[i];
    }

    for(let i=l-1; i>=0; i--) {
        result[i] = result[i] * post;
        post = post * nums[i];
    }

    return result;
};