class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        if len(strs) == 0:
            return []
        _map = {}

        for _str in strs:
            letters = [0] * 26

            for c in _str:
                index = ord(c) - ord('a')
                letters[index]+=1
            key = tuple(letters)

            if key in _map:
                _map[key].append(_str)
            else:
                _map[key] = [_str]

        return list(_map.values())
            

        