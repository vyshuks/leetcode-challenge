class Solution {
    public boolean isAnagram(String s, String t) {
        int s_len = s.length();
        int t_len = t.length();

        if(s_len != t_len) {
            return false;
        }

        HashMap<Character,Integer> charCount = new HashMap<>();
        for(int i = 0; i< s_len; i++) {
            charCount.put(s.charAt(i), charCount.getOrDefault(s.charAt(i), 0) + 1);
            charCount.put(t.charAt(i), charCount.getOrDefault(t.charAt(i), 0) - 1);
            

        } 

        for(int val: charCount.values()) {
            if(val!=0) {
                return false;
            }
        }

        return true;
    }
}