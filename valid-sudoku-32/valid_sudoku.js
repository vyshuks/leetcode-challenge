/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const row_seen =  Array.from({ length: 9 }, () => new Set());
    const col_seen =  Array.from({ length: 9 }, () => new Set());
    const box_seen =  Array.from({ length: 9 }, () => new Set());

    for(let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {
            let num = board[i][j];
            if(num === ".") {
                continue;
            }

            if(row_seen[i].has(num)) {
                
                return false;
            }
            row_seen[i].add(num);

            if(col_seen[j].has(num)) {
                
                return false;
            }
            col_seen[j].add(num);

            let idx = (Math.floor(i/3)) * 3 + Math.floor(j/3);
            if(box_seen[idx].has(num)) {
               
                return false;
            }

            box_seen[idx].add(num);
        }

        
    }
    return true;
};