class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        if(strs.length == 0) {
            return new ArrayList<>();
        }

        Map<String, List<String>> map = new HashMap<>();

        for(String str: strs) {
            int[] letters =new int[26];
            for(char c: str.toCharArray()) {
                letters[c - 'a'] += 1;
            }

            StringBuilder keybuilder = new StringBuilder();
            for(int count: letters){
                keybuilder.append(count).append('#');
            }
            String key = keybuilder.toString();
            if (!map.containsKey(key)) {
                map.put(key, new ArrayList<>());
            }

            // Add the string to the corresponding group
            map.get(key).add(str);
        }

        return new ArrayList<>(map.values());
    }
}