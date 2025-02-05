# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer[]}

class Heap
    attr_reader :heap

    def initialize
        @heap = []
    end

    def parent_index index
        (index-1)/2
    end

    def left_child_index index
        2*index+1
    end

    def right_child_index index
        2*index+2
    end

    def size
        @heap.length
    end

    def is_swap_needed?(a,b)
        @heap[a][1] > @heap[b][1]
    end

    def swap(a,b) 
        @heap[a], @heap[b] = @heap[b], @heap[a]
    end


    def peek
        @heap[0]
    end

    def bubble_up idx 
        loop do
            parent_idx = parent_index(idx)
            if idx > 0 && is_swap_needed?(parent_idx, idx)
                swap(parent_idx, idx)
                idx = parent_idx
            else
                return
            end
        end
    end

    def bubble_down idx
        loop do
            swap_idx = idx
            parent_idx = parent_index swap_idx
            left_idx = left_child_index swap_idx
            right_idx = right_child_index swap_idx

            if left_idx < size && is_swap_needed?(swap_idx, left_idx)
                swap_idx=left_idx
            end

            if right_idx < size && is_swap_needed?(swap_idx, right_idx)
                swap_idx = right_idx
            end
              
            if swap_idx != idx
                swap(idx, swap_idx)
                idx = swap_idx
            else
                return
            end
        end
    end

    def heap_push(pair)
        @heap.push(pair)
        bubble_up(size - 1)
    end
    
    def heap_pop
        return nil if size.zero?
        top = peek
        swap(0, size - 1)
        @heap.pop
        bubble_down(0) unless @heap.empty?
        top
    end
    
    def heap_push_pop(pair)
        heap_push(pair)
        heap_pop
    end

end

def top_k_frequent(nums, k)
    frequency = {}
    heap = Heap.new
    nums.each do |num|
        if frequency.has_key? num
            frequency[num] += 1
        else
            frequency[num] = 1
        end
    end

    frequency.each do |key,val|
        if heap.size < k
            heap.heap_push([key,val])
        else
            heap.heap_push_pop([key,val])
        end
    end

    heap.heap.map { |arr| arr[0] }


end