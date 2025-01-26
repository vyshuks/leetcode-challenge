class Solution {
public:
    bool isAnagram(string s, string t) {
        int s_len = s.length();
        int t_len = t.length();

        if(s_len != t_len) {
            return false;
        }

        unordered_map<char,int> char_count;

        for(int i=0; i<s_len; i++) {
            char_count[s[i]] +=  1;
            char_count[t[i]] -= 1;
        }

        for(auto i : char_count) {
            if(i.second!=0) {
                return false;
            }
        }

        return true;

            
        }
    
};