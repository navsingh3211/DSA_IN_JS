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










































































