/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const heap = new Heap();
    const freq = new Map();

    for(num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for([num, frequency] of freq) {
       // console.log(num,frequency);
        if(heap.size() < k) {
            heap.heapPush([num, frequency]);
        }else{
            heap.heapPushPop([num, frequency]);
        }
        console.log(heap.peek())
    }

    return heap.heap.map(arr => arr[0]);

};

class Heap {
    constructor() {
        this.heap = [];
    }

    parentIndex = i => Math.floor((i-1)/2);

    leftChildIndex = i => 2 * i + 1;

    rightChildIndex = i => 2 * i + 2;

    size = () => this.heap.length;

    isSwapNeed = (a,b) => this.heap[a][1] > this.heap[b][1];

    swap = (a,b) => [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];

    peek = () => this.heap[0];

    bubbleUp(idx) {
        while(true) {
            const parentIndex = this.parentIndex(idx);
            if(idx>0 && this.isSwapNeed(parentIndex, idx)) {
                this.swap(parentIndex, idx);
                idx = parentIndex;

            }else{
                return;
            }
            
        }
    }

    bubbleDown(idx) {

        while(true) {
            
            let swapIndex = idx;
            const leftChildIndex = this.leftChildIndex(swapIndex);
            const rightChildIndex = this.rightChildIndex(swapIndex);

            const size = this.size();

            if(leftChildIndex < size && this.isSwapNeed(swapIndex, leftChildIndex)) {
                swapIndex = leftChildIndex;
            }

            if(rightChildIndex < size && this.isSwapNeed(swapIndex, rightChildIndex)) {
                swapIndex = rightChildIndex;
            }

            if(swapIndex != idx) {
                this.swap(idx, swapIndex);
                idx = swapIndex;
            }else {
                return;
            }
        }

    }

    heapPush(pair) {
        
        this.heap.push(pair);
        const idx = this.size()-1;
        this.bubbleUp(idx);

    }

    heapPop() {
        const top = this.peek();
        this.swap(0, this.size()-1);
        this.heap.pop();
        this.bubbleDown(0);
        return top;

    }

    heapPushPop(pair) {
        this.heapPush(pair);
        this.heapPop();
    }
        
}