# @param {Integer[]} nums
# @return {Boolean}
def contains_duplicate(nums)
    is_seen = {}
    for num in nums do
        if is_seen.key? num
            return true
        end
        is_seen[num] = 1

    end
    return false
end