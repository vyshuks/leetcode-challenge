# @param {String} s
# @param {String} t
# @return {Boolean}
def is_anagram(s, t)
    s_len = s.length
    t_len = t.length

    if s_len != t_len
        return false
    end

    char_counter = {}

    i = 0
    while i < s_len
        c1 = s[i]
        c2 = t[i]
        char_counter[c1] = (char_counter[c1] || 0) + 1
        char_counter[c2] = (char_counter[c2] || 0) - 1

        i += 1
    end
    

    char_counter.each do|key, _|

        if char_counter[key] != 0
            return false
        end
    end

    true


end