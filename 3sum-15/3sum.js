/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    l = nums.length
    nums.sort((a, b) => a - b);  // Ensure the array is sorted
    result = []

    for(let i=0;i<l-2;i++){
        if(nums[i]>0){
            break;
        }

        if(i>0 && nums[i]==nums[i-1]){
            continue;
        }
        left = i+1
        right=l-1

        while(left<right){
            total = nums[i]+nums[left]+nums[right]
            if(total==0){
                result.push([nums[i],nums[left],nums[right]])
                left++;
                right--;

                while(left<right && nums[left]==nums[left-1]){
                    left++;
                }
                
            }else if(total > 0){
                right--;
            }else{
                left++;
            }
        }
        
    }
    return result;
};