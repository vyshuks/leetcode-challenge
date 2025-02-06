# @param {Integer[]} nums
# @return {Integer[]}
def product_except_self(nums)
    l = nums.length
    result = [1]*l

    pre,post=1,1

    i = 0
    until i == l do
        result[i] = pre
        pre = pre * nums[i]
        i+=1
    end

    i = l-1
    until i < 0 do
        result[i] = result[i] * post
        post = post * nums[i]
        i-=1
    end

    return result
end