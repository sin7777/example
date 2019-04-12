//o
function shellSort(arr){
    let len = arr.length;
    let tmp, gap = 1;
    while(gap < len/3){
        gap = gap*3+1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/3)){
        for (let i = gap; i < len; i++){
            tmp = arr[i];
            for (let j = i - gap; j > 0 && arr[j] > tmp; j-= gap){
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = tmp;
        }
    }
    return arr;
}