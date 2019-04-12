//O(n log n) 
function quickSort(arr,left,right){
    let len = arr.length,
        partitiononIndex;
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len-1 : right;
    if (left < right){
        partitiononIndex = partition(arr,left,right);
        quickSort(arr, left, right);
        quickSort(arr,partitiononIndex+1,right);
    }
    return arr;
}

function partition(arr,left,right){
    let pivot = left;
    let index = pivot + 1;
    for (let i = index; i <= right; i++){
        if (arr[i] < arr[pivot]){
            swap(arr, i, index)
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}

function swap(arr, i, j){
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

//方法二
var quickSort2 = function(arr) {
    //console.time('2.快速排序耗时');
　　if (arr.length <= 1) { return arr; }
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
//console.timeEnd('2.快速排序耗时');
　　return quickSort2(left).concat([pivot], quickSort2(right));
};