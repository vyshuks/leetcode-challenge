func isAnagram(s string, t string) bool {
    s_len := len(s)
    t_len := len(t)

    if s_len != t_len {
        return false
    }

    char_count := make(map[byte]int)

    for i:=0; i<s_len; i++ {
        char_count[s[i]] += 1
        char_count[t[i]] -= 1

    }

    for k,_ := range char_count {
        if char_count[k] != 0 {
            return false
        }
    }   

    return true
}