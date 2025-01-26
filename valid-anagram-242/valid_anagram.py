class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        len_s, len_t = len(s), len(t)
        if len_s != len_t:
            return False
        
        char_counter = {}
        for c1, c2 in zip(s,t):
            char_counter[c1] = char_counter.get(c1,0) + 1
            char_counter[c2] = char_counter.get(c2,0) - 1
            


        for key in char_counter:
            if char_counter[key] != 0:
                return False
            

        return True
        