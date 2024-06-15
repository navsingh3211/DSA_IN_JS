//1.) Print the given string in reverse order
let str = "Ram is a good boy";
function reverseStr(str){
    let s = 0;
    let e = str.length - 1;
    while(e>=s){
        let temp = str[s];
        str[s] = str[e];
        str[e] = temp;
        s++;
        e--;
    }
    return str.join("");
}
console.log(reverseStr(str.split('')))


//2.) Remove all characters from string except alphabets :

const str2 = "#Justice!For@Chutki123";
function keepAlpha(str){
    let result = '';
    for(let ele of str){
        if((ele >= 'A' && ele <= 'Z') || ( ele >='a' && ele <= 'z')){
            result += ele
        }
    }
    return result;
}
// let i = 'a'
// if(i>='A' && i<='Z'){
//     console.log('ramji')
// }else{
//     console.log('dsd')
// }
console.log(keepAlpha(str2))