const arr = [11,3,4,7,2];


  

function findSecondSMall(arr){
  let small=arr[0];
  for(let ele of arr){
    if(ele<small){
      small=ele
    }
  }
  let result;
  for(let i=0;i<arr.length;i++){
    if(arr[i]<arr[i+1] && arr[i]){

    }
  }
  return small;
}

console.log(findSecondSMall(arr));