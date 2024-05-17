function promiseReturn(t,resl){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(resl);
    },t);
  });
}
// // console.log("ff");
// let pra = promiseReturn();
// pra.then((data)=>{
//   console.log(data)
// });


let p1 = promiseReturn(1000,{p1:"p1"});
let p2 = promiseReturn(2000,{p2:"p2"});
let p3 = promiseReturn(3000,{p3:"p3"});
let p4 = promiseReturn(4000,{p4:"p4"});

Promise.all([p1,p2,p3,p4]).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log('error in any promise',error);
})