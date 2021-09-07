function swap(arr, index1, index2) {
   let temp = arr[index1]
   arr[index1] = arr[index2]
   arr[index2] = temp
}

function selectionSort(arr) {
    
    for(let i = 0; i < arr.length; i++){
        let minIdx = i;
        for(let j = i + 1; j <arr.length; j++){
            if(arr[j] < arr[minIdx]){
                minIdx = j
            }
        }
        swap(arr, i, minIdx)
    }
    return arr
}


console.log(selectionSort([17,3,6,9,3,5,7,10]))
module.exports = {
    selectionSort,
    swap
};