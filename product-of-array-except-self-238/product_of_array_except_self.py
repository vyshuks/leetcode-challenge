class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        l = len(nums)
        result = [1] * l
        pre, post = 1, 1

        for i in range(l):
            result[i] = pre
            pre = pre * nums[i]

        for i in range(l-1,-1,-1):
            result[i] = result[i] * post
            post = post*nums[i]

        return result
        