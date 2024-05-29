// Sort first half in ascending order and second half in descending

// const arr = [1, 90, 34,22,77, 89, 7, 9];
const arr = [2,1,9,5,7];


function sortIncAndDesc(arr){
  let s=0;
  let e=arr.length-1;
  let mid=Math.floor(s+(e-s)/2);
  console.log(mid)
  
  
  for(let i=0;i<=mid;i++){
    for(let j=0;j<mid-i;j++){
      if(arr[j]>arr[j+1]){
        let temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
  }
  for(let i=mid+1;i<=e;i++){
    for(let j=mid+1;j<e;j++){
      if(arr[j+1]>arr[j]){
        let temp=arr[j+1];
        arr[j+1]=arr[j];
        arr[j]=temp;
      }
    }
    // console.log(arr);
  }
  return arr;
}

console.log(sortIncAndDesc(arr))