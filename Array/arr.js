// 1.) Find Second Smallest Element in an Array


const arr = [111,2,4,22,11,44,55];

function findSecondMin(arr){
    let min=arr[0];
    for(let ele of arr){
        if(ele<min){
            min=ele;
        }
    }
    let secondMin=Math.max(...arr);
    for(let ele of arr){
        if(ele>min && ele<secondMin){
            secondMin=ele
        }
    }
    return secondMin;
}
console.log(findSecondMin(arr))
// console.log(Math.max(...arr))

// 2.)Reverse an Array

const arr2 = [111,2,4,22,11,44,55];

function reverseArr(arr){
    let start = 0;
    let end = arr.length-1;
    while(end>=start){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
console.log(reverseArr(arr))

