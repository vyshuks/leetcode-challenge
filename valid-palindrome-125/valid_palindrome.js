/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const l = s.length;
    let left = 0, right=l-1;

    while(left<=right){
        while(left < l && !s[left].match(/^[0-9a-zA-Z]+$/)) {
            left++;
        }

        while(right >= 0 && !s[right].match(/^[0-9a-zA-Z]+$/)) {
            right--;
        }

        if(left <= right && s[left].toLowerCase() != s[right].toLowerCase()) {
            return false;
        }
        right--;
        left++;
    }
    return true;
};