// Time Complexity: O(n2)
// Space Complexity: O(1)

function insertionSort(arr) {
    const length = arr.length;
    for (let i = 1; i < length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
const arr = [63, 23, 22, 10, 12, 11, 1];
console.log(insertionSort(arr));