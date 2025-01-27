class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        _map = {}

        for i,num in enumerate(nums):
            n = target - num
            if n in _map:
                return [i, _map[n]]
            _map[num] = i
        