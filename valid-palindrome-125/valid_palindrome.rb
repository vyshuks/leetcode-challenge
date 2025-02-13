# @param {String} s
# @return {Boolean}
def is_palindrome(s)
    l = s.length
    left = 0
    right = l-1

    while left <= right
        while left < l and !s[left].match?(/[a-zA-Z0-9]/)
            left+=1
        end

        while right >= 0 and !s[right].match?(/[a-zA-Z0-9]/)
            right-=1
        end

        if left<=right and s[left].downcase != s[right].downcase
            return false
        end

        left+=1
        right-=1

    end

    true
end