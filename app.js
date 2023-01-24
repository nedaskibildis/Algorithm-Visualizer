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
        console.log("ASD");
        insertionSort(arrayToSort);
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

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

createElements(arrayToSort);
