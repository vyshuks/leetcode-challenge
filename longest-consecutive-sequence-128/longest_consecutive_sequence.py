class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        l = len(nums)

        if l ==0:
            return 0
        

        num_set = set(nums)
       
        result = 1

        for num in num_set:
            
            if num-1 not in num_set:
                
                next_num = num+1
                while next_num in num_set:
                    next_num+=1
                    
                result = max(result, next_num-num)
        return result

        
        