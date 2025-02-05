import heapq
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:

        frequency = {}

        for num in nums:
            frequency[num] = frequency.get(num, 0) + 1
        
        
        heap = []
        for key, val in frequency.items():
            if len(heap) < k:
                heapq.heappush(heap, (val,key))
            else:
                heapq.heappushpop(heap, (val, key))
            

        result = []
        for _, key in heap:
            result.append(key)

        return result