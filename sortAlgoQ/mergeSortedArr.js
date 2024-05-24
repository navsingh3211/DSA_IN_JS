const arr1 = [1,3,5,7,9];
const arr2 = [2,4,8,10,11,12,16];
const result = [1,2,4,5,7,8,9,10];

function mergeSortedArr(arr1,arr2){
  let l1=arr1.length;
  let l2=arr2.length;
  let i = 0;
  let j = 0;
  let k = 0;
  let resultArr = [];
  while(i<l1 && j<l2){
    if(arr1[i]<arr2[j]){
      resultArr[k]=arr1[i];
      i++;
      k++;
    }else{
      resultArr[k]=arr2[j];
      j++;
      k++;
    }
  }
  while(i<l1){
    resultArr[k++]=arr1[i++];
  }
  while(j<l2){
    resultArr[k++]=arr2[j++];
  }
  return resultArr;
}
console.log(mergeSortedArr(arr1,arr2),'result:')