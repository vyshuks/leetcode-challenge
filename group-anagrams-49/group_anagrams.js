/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length==0) {
        return [];
    }

    let _map = {};

    for(const str of strs) {
        let letters = new Array(26).fill(0);
        for(const c of str) {
            let index = c.charCodeAt() - 'a'.charCodeAt();
            letters[index]+=1;
        }
        let key = letters.toString();
        if(key in _map) {
            _map[key].push(str);
        }else {
            _map[key] = [str];
        }

        
    }

    return Object.values(_map);
};