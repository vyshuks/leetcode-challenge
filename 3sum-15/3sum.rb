# @param {Integer[]} nums
# @return {Integer[][]}
def three_sum(nums)
    l = nums.length
    nums.sort!
    result = []
    i = 0
    while i<l-2 do
        break if nums[i] > 0
        
        if i > 0 && nums[i] == nums[i - 1]
            i += 1
            next
        end

        left = i+1
        right = l-1

        while left < right do
            total = nums[i] + nums[left] + nums[right]
            if total == 0
                result.push([nums[i], nums[left], nums[right]])
                left+=1
                right-=1

                while left < right and nums[left] == nums[left-1] do
                    left+=1
                end
            elsif total > 0
                right-=1
            else
                left+=1
            end
        end
        i+=1
    end
    result
end