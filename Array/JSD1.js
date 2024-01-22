//Q1.) frequency
// const sent ="raam issa a good boy don";
// let resultObj={};

// for(const ele of sent){
//   if(ele!== ' '){
//     resultObj[ele] = (resultObj[ele] || 0) +1;
//   }
// }
// console.log(resultObj)

//Q2.) Group items on the basis of age of given array of object
// let people = [
//   {name:'Alice',age:21},
//   {name:'Max',age:20},
//   {name:'jane',age:20}
// ];
// const pplObj={};
// for(const person of people){
//   // console.log(person);
//   if(pplObj[person.age]){
//     pplObj[person.age].push(person);
//   }else{
//     pplObj[person.age]=[person];
//   }
// }
// console.log(pplObj);

// Q3.) Find the pairs of array element for which sum is equal to given target value (Two Sum Problem)

//m:1
// const arr = [1,2,3,4,5,6,7,8,9];
// let result = [];
// const target = 7;

// for(const ele of arr){
//   for(let i=1;i<arr.length;i++){
//     if(ele+arr[i] === target){
//       result.push([ele,arr[i]]);
//     }
//   }
// }

// console.log(result)

//m2
// const arr = [1,2,3,4,5,6,7,8,9];

// let result=[];
// const target = 44;
// let seenNum= new Set();

// for(let ele of arr){
//   let complement = target - ele;
//   if(seenNum.has(complement)){
//     result.push([ele,complement]);
//   }
//   seenNum.add(ele);
// }
// console.log(result);


//Set() function remove the duplicate
// const arr = [1,2,3,2,5,6,5,3,6];
// let num=new Set();
// for(let ele of arr){
//   num.add(ele);
// }
// console.log(num);


// 4.) reverse an array
// const arr = [1,3,4,6,2,7,9];
// let s=0;
// let e=arr.length-1;

// while(e>=s){
//   let temp=arr[s];
//   arr[s]=arr[e];
//   arr[e]=temp;
//   s++;
//   e--;
// }

// console.log(arr,"ds");

// 5.) reverse a matrix
/* output-->3 2 1
            6 5 4
            9 8 7 */

// const mat = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];
// for(let i=0;i<mat.length;i++){
//   let s = 0;
//   let e = mat[i].length-1;
//   while(e>=s){
//     let temp=mat[i][s];
//     mat[i][s]=mat[i][e];
//     mat[i][e]=temp;
//     s++;
//     e--;
//   }
// }
// console.log(mat);


//6.)Find the missing number from unsorted array with O(n) complexity

//7.)Find the missing number from sorted array with O(n) complexity



//promise example
// 1.)

//  async function fetchData(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       const data = {message:"Nilu dogla randi"};
//       resolve(data);
//     },10000);
//   })
// } 

// fetchData().then((data)=>{
//   console.log(data);
// }).catch((error)=>{
//   console.log(error)
// }).finally(
//   console.log("fdfef")
// );
// // console.log(data);

// 2.) write a sleep function using promise:

// function sleep(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(function(){
//       console.log("ram");
//     },1000);
//   });
// }
// sleep().then();


//3.)

// function delay(del,params){
//   return new Promise((resolve,reject)=>{
//     setTimeout(function() {
//       console.log(params + "-console");
//     }, del);
//     resolve(params);
//   })
// }

// let ram = Promise.all([delay(2000,"p1"),delay(3000,"p2"),delay(5000,"p3")]);
// ram.then((data)=>{
//   console.log(data)
// });
// // console.log(p1)