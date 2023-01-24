const unsortedArr = [12, 34, 25, 123, 5, 12, 42, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66];
let arrayToSort = [12, 34, 25, 123, 5, 12, 42, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66];
const displayList = document.querySelector("UL");
const resetButton = document.querySelector(".resetButton");
const startButton = document.querySelector(".startButton");
const selectButton = document.querySelector("#algorithmChoice");

resetButton.addEventListener("click", () => {
    createElements(unsortedArr);
    arrayToSort = [...unsortedArr];
})

startButton.addEventListener("click", () => {
    if (selectButton.value == "bubblesort") {
        bubbleSort(arrayToSort);
    } else if (selectButton.value == "insertionsort") {
        insertionSort(arrayToSort);
    } else if (selectButton.value == "quicksort") {
        quickSort(arrayToSort, 0, arrayToSort.length - 1)
    } else {
        mergeSort(arrayToSort, 0, arrayToSort.length - 1)
        createElements(arrayToSort)
    }
})

const createElements = (arr) => {
    displayList.innerHTML = "";
    for (element in arr) {
        const newLI = document.createElement('li');
        displayList.append(newLI);
        newLI.style.width = "10px";
        newLI.style.border = "1px solid black"
        newLI.style.backgroundColor = "red";
        const height = arr[element] * 5;
        newLI.style.height = `${height}px` 
    }
}

async function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length); j++) {
            if(arr[j] > arr[j+1]){
        
       // If the condition is true then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
                createElements(arr);
                await sleep(100);
            }
        }
        await sleep(100)
    }
}

async function insertionSort(arr) {
    let i, key, j; 
    for (i = 1; i < arr.length; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        }
        await sleep(100); 
        arr[j + 1] = key; 
        createElements(arr);
    } 

}


// Javascript implementation of QuickSort
 
 
// A utility function to swap two elements
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
 
/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
   array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
function partition(arr, low, high) {
 
    let pivot = arr[high];
 
    let i = (low - 1);
 
    for (let j = low; j <= high - 1; j++) {
 
        if (arr[j] < pivot) {
 
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}
 
async function quickSort(arr, low, high) {
    if (low < high) {
        await sleep(100);
        createElements(arr);
        let pi = partition(arr, low, high);
 
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}


 
// JavaScript program for Merge Sort
 
// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
async function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
 
    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);
 
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
 
    // Merge the temp arrays back into arr[l..r]
 
    // Initial index of first subarray
    var i = 0;
 
    // Initial index of second subarray
    var j = 0;
 
    // Initial index of merged subarray
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
 
// l is for left index and r is
// right index of the sub-array
// of arr to be sorted */
async function mergeSort(arr,l, r){
    if(l>=r){
        createElements(arr)
        return;//returns recursively
    }
    var m =l+ parseInt((r-l)/2);
    await sleep (100)
    createElements(arr)
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

createElements(arrayToSort);
