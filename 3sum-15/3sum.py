class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        l=len(nums)
        nums.sort()
        result = []

        for i in range(l-2):
            if nums[i]>0:
                break
            if i>0 and nums[i]==nums[i-1]:
                continue
            
            left = i+1
            right = l-1

            while left < right:
                total = nums[i]+nums[left]+nums[right]
                if total ==0:
                    result.append([nums[i],nums[left],nums[right]])
                    left+=1
                    right-=1

                    while left < right and nums[left]==nums[left-1]:
                        left+=1
                    
                elif total < 0:
                    left+=1
                else:
                    right-=1

        return result


        