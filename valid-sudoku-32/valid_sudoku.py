class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        
        row_seen = [set() for _ in range(9)]
        col_seen = [set() for _ in range(9)]
        box_seen = [set() for _ in range(9)]

        for i in range(9):
            for j in range(9):
                num = board[i][j]
                if num == ".":
                    continue

                
                if num in row_seen[i]:
                    return False
                row_seen[i].add(num)

                
                if num in col_seen[j]:
                    return False
                
                col_seen[j].add(num)

                idx = (i//3) * 3 + (j//3)


                
                if num in box_seen[idx]:
                    return False
                box_seen[idx].add(num)

        return True

        