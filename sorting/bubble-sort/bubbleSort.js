// Time Complexity: O(n2)
// Space Complexity: O(1)

function bubbleSort(arr){
    const length = arr.length
    for (i=0; i<length; i++){
        for(j=0; j  < length - i - 1; j++){ 
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
return arr;
}

const arr = [63, 23, 22, 10, 12, 11, 1];
console.log(bubbleSort(arr));