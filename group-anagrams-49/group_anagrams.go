func groupAnagrams(strs []string) [][]string {
    if len(strs) == 0 {
        return [][]string{}
    }

    _map := make(map[string][]string)

    for _, str:= range strs {
        letter := make([]int, 26)
        for _, c := range str {
            letter[c-'a']++
        }
        
        key := strings.Trim(strings.Join(strings.Fields(fmt.Sprint(letter)), ","), "[]")

        _map[key] = append(_map[key], str)
       
    }

     result := make([][]string, 0, len(_map))
        for _, grp := range _map {
            result = append(result, grp)
        }

        return result

     
}