# @param {Integer[]} numbers
# @param {Integer} target
# @return {Integer[]}
def two_sum(numbers, target)
    left, right = 0, numbers.length-1

    while left < right do
        s = numbers[left] + numbers[right]
        if s == target
            return [left+1, right+1]
        elsif s > target
            right-=1
        else
            left+=1
        end
    end
end