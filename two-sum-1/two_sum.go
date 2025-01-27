func twoSum(nums []int, target int) []int {
    _map := make(map[int]int)

    for i, num:= range nums{
        n := target - num
        _, ok := _map[n]
        if ok {
            return []int{i, _map[n]}
        }
        _map[num] = i
        i += 1
    }
    return nil
}