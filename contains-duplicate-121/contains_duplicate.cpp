class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_map<int,int> is_seen;
        for(int i=0; i< nums.size(); i++) {
            if(is_seen.count(nums[i]) > 0) {
                return true;
            }
            is_seen[nums[i]] = 1;
        }
        return false;
    }
};