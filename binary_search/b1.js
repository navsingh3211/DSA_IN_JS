const binaryArr = [1,2,3,4,5,6,7,8];
const searchEle = 5;

function binarySearch(arr,ele){
  let start = 0;
  let end = arr.length-1;
  
  while(end>=start){
    let mid = parseInt(start + (end-start)/2);
    if(ele === arr[mid]){
      return mid
    }
    if(ele>arr[mid]){
      start = mid;
    }else{
      end = mid;
    }
  }
}

console.log(binarySearch(binaryArr,searchEle),'binarySearch')

