// 1.)Sort the elements of an array 

function sortArr(arr){
    let len = arr.length;
    for(let i=0;i<len;i++){
        for(let j=0;j<len-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
const arr = [4,1,2,5,6,8,7,10,9];
console.time();
console.log(sortArr(arr));
console.timeEnd()

// 2.) Merge two sorted array such that after merging the whole new array will be sorted

function mergeSortedArr(arr1,arr2){
    let l1=arr1.length-1;
    let l2=arr2.length-1;
    let r1=l1+l2;
    let i=0;
    let j=0;
    let k=0;
    let result=[];
    while(l1>=i && l2>=j){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i]);
            k++;
            i++;
        }else{
            result.push(arr2[j]);
            k++;
            j++;
        }
    }
    
    while(l1>=i){
        result[k++]=arr1[i++];
    }
    while(l2>=j){
        result[k++]=arr2[j++];
    }
    return result;
}

const arr1 = [1,3,5,7,9];
const arr2 = [2,4,8,10,11,12,16];
console.time();
console.log(mergeSortedArr(arr1,arr2));
console.timeEnd();


// 3.)Sorting elements of an array by frequency
const arr22 = [4,1,2,5,6,8,7,10,9,4,1,2,2,5,5,5,5,10,10,10];

function sortArrByFrequency(arr){
    let freqObj={};
    for(let ele of arr){
        if(freqObj[ele]){
            freqObj[ele] = freqObj[ele] + 1;
        }else{
            freqObj[ele]=1;
        }
    }
    let objKeys=Object.keys(freqObj);
    for(let i=0;i<objKeys.length;i++){
        for(let j=0;j<objKeys.length-i;j++){
            if(freqObj[objKeys[j]]>freqObj[objKeys[j+1]]){
                let temp = freqObj[objKeys[j]];
                freqObj[objKeys[j]] = freqObj[objKeys[j+1]];
                freqObj[objKeys[j+1]] = temp;
            }
        }
    }
    return freqObj;
}
console.log(sortArrByFrequency(arr22));


// 4.)Finding the Longest Palindrome in an Array
const inputArr = [1, 232, 5545455, 99999999, 161];

function isPalindrom(num){
    return '' + num === ('' + num).split('').reverse().join('');
}

function findlongestPalindrom(arr){
    let resultingValue = arr[0];
    for(let ele of arr){
        if(isPalindrom(ele) && ('' + ele).length > ('' + resultingValue).length){
            resultingValue=ele;
        }
    }
    return resultingValue;
}

console.log(findlongestPalindrom(inputArr));


// 5.)Counting Distinct Elements in an Array
const arr5 = [1, 1, 2, 3, 3,3,4,5,5,7];

function countDistinctElement(arr){
    let count = 0;
    let tempObj = {};
    for(let ele of arr){
        if(tempObj[ele]){
            tempObj[ele] = tempObj[ele] + 1;
        }else{
            tempObj[ele] = 1;
        }
    }
    console.log(tempObj)
    let tempObjKeys = Object.keys(tempObj);
    for(let ele of tempObjKeys){
        if(tempObj[ele] === 1){
            count++;
        }
    }
    return count;
}

console.log(countDistinctElement(arr5))


// 6.)Removing Duplicate elements from an array : 
let arr6 = [1, 1, 2, 3, 3,3,4,5,5,7];

function countDistinctElement(arr){
    let tempObj = {};
    for(let ele of arr){
        if(tempObj[ele]){
            tempObj[ele] = tempObj[ele] + 1;
        }else{
            tempObj[ele] = 1;
        }
    }
    let result=[]
    let tempObjKeys = Object.keys(tempObj);
    for(let ele of tempObjKeys){
        if(tempObj[ele] ===1){
            result.push(+ele);
        }
    }
    return result;
}
console.log(countDistinctElement(arr6))

// 7.)Finding Minimum scalar product of two vectors
let arr77 = [1, 2, 6, 3, 7];
let arr88 = [10, 7, 45, 3, 7];

function findMinimumScalarProduct(arr1,arr2){
    let l1 = arr1.length-1;
    let l2 = arr2.length-1;
    let i = 0;
    let j = 0;
    
    let minProduct = arr1[0]*arr2[0];
    while(i<=l1 && j<=l2){
        if(arr1[i]*arr2[j]<minProduct){
            minProduct = arr1[i]*arr2[j];
        }
        i++;
        j++;
    }
    return minProduct;
}
console.log(findMinimumScalarProduct(arr77,arr88));










































































