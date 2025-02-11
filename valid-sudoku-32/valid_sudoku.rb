# @param {Character[][]} board
# @return {Boolean}
def is_valid_sudoku(board)
    row_seen = Array.new(9) {Set.new}
    col_seen = Array.new(9) {Set.new}
    box_seen = Array.new(9) {Set.new}

    (0..8).each do |i|
        (0..8).each do |j|
            num = board[i][j]

            next if num == "."
            

            return false if row_seen[i].include?(num)
            row_seen[i].add(num)

            return false if col_seen[j].include?(num)
            col_seen[j].add(num)

            idx = (i/3) * 3 + (j/3)

            return false if box_seen[idx].include?(num)

            box_seen[idx].add(num)

        end
    end

    return true
end