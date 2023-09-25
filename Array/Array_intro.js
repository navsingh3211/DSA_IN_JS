//Q1. Swap to number from an given array with certain array

let arrInput=[1,2,3,4,5,6];

function swapNumber(arr,s,e){
    let temp=arr[s];
    arr[s] = arr[e];
    arr[e] = temp;
    return arr;
}
console.log(arrInput);
console.log(swapNumber(arrInput,1,2));



//Q2. find max value from an array
let arrInput2 = [1323, 22, 3, 4, 5, 6];

function findMaxx(arrInput2) {
    let maxNum = arrInput2[0];
    for (let i = 1; i < arrInput2.length; i++) {
        // console.log(i);
        if (arrInput2[i] > maxNum) {
            maxNum = arrInput2[i];
        }
    }
    return maxNum;
}
// console.log(findMaxx(arrInput2));


//Q3. find max value from a given range in an array
let arrInput3 = [1323, 221, 3, 4, 5, 6, 78, 99, 31, 123];

function findMaxxRange(arrInput2, start, end) {
    
    if (start>end){
        return -1;
    }
    if(arr == null){
        return -1;
    }

    let maxNum = arrInput2[start];
    for (let i = start; i <= end; i++) {
        // console.log(i);
        if (arrInput2[i] > maxNum) {
            maxNum = arrInput2[i];
        }
    }
    return maxNum;
}

// console.log(findMaxxRange(arrInput3, 1, 6));


//Q4. 
