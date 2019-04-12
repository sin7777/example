//O(1)-O(n2)
function bubbleSort(arr){
    let len = arr.length;
    for (let i = 0; i < len; i++){
        for (var j = 0; j < len - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                let tmp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}