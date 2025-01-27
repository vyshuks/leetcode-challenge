class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int,int> map;
        for(int i=0; i<nums.size(); i++) {
            int n = target - nums[i];
            if(map.count(n)>0){
                return {i, map[n]};
            }
            map[nums[i]]=i;
        }
        return {};
    }
};