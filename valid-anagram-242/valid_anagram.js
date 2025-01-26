/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let s_len = s.length;
    let t_len = t.length;

    if (s_len != t_len) return false;

    let charCount = {};
    

    for(let i=0; i<s_len; i++) {
      charCount[s[i]] = (charCount[s[i]] || 0) +  1;
      charCount[t[i]] = (charCount[t[i]] || 0) -  1;  
    }

    for( let key in charCount) {
        if(charCount[key] !== 0) {
            return false;
        }
    }

    return true;

};