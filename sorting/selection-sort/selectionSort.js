// Time Complexity: O(n2)
// Space Complexity: O(1)

function selectionSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] =  [arr[minIndex], arr[i]];
        }
    }
    return arr;
}
const arr = [63, 23, 22, 10, 12, 11, 1];
console.log(selectionSort(arr));