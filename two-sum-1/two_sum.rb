# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    _map = {}
    nums.each_with_index do |val,i|
        n = target - val
        if _map.has_key? n
            return [i, _map[n]]
        end
        _map[val] = i
    end
end