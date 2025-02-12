# @param {Integer[]} nums
# @return {Integer}
def max(*values)
    values.max
end
def longest_consecutive(nums)
    if nums.length == 0
        return 0
    end

    num_set = nums.to_set
    result=1

    num_set.each do |num|
        unless num_set.include?(num-1)
            next_num = num+1
            while num_set.include? next_num
                next_num+=1
            end
            result = max(result, next_num-num)
        end
    end

    result
end