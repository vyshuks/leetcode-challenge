package main

func containsDuplicate(nums []int) bool {
    is_seen := make(map[int]int)
    for num:= range nums {
        _, ok := is_seen[num]
        if ok {
            return true
        }

        is_seen[num] = 1

    }

    return false
}

func main() {
   containsDuplicate([]int{1,2,3,1})
}