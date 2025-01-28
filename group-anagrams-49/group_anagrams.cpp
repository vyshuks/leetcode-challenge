class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        if(strs.empty()) {
            return {};
        }

        unordered_map<string,vector<string>> map;

        for(int i=0; i< strs.size(); i++) {
            vector<int> letter(26,0);
            for(auto ch: strs[i]) {
                int index = int(ch) - int('a');
                letter[index]+=1;

            }

            string key;
            for(int count: letter) {
                key += "#" + to_string(count);
            }

            map[key].push_back(strs[i]);



        }

        vector<vector<string>> result;
        for (const auto& group : map) {
            result.push_back(group.second);
        }

        return result;
    }
};