const arr = [44,11,2,3,2,3,3,11,11,11,23,23,23,23,23,1,1,1,1,1,1];

function findFrequencyAndSortArrByFreq(arr){
  let result = {}
  for(let i=0;i<arr.length;i++){
    if(result[arr[i]]){
      result[arr[i]] = result[arr[i]] + 1;
    }else{
      result[arr[i]] = 1;
    }
  }
  const entries = Object.entries(result);
  for(let i=0;i<entries.length;i++){
    for(let j=0;j<entries.length;j++){
      if(entries[j][1]>entries[j+1][1]){
        
      }
    }
  }
  return entries;
}

console.log(findFrequencyAndSortArrByFreq(arr),'result:')