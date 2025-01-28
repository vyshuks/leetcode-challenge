# @param {String[]} strs
# @return {String[][]}
def group_anagrams(strs)
    map = {}
    strs.each do |str|
        letters = [0]*26
        str.split("").each do |c|
            i = c.ord - 'a'.ord
            letters[i]+=1
        end

        key = letters.to_s
        if map.has_key? key
            map[key].append(str)
        else
            map[key] = [str]

        end
    end

    map.values
end