
const arr = [3,4,1,2,6,5];

function bubbleSortarr(arr){
  console.time()
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i;j++){
      if(arr[j]>arr[j+1]){
        let temp = arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
  }
  console.timeEnd();
  return arr;
}
console.log(bubbleSortarr(arr));
console.log(arr);