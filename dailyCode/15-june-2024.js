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

// 3.) Remove spaces from a string :
const str3 = "Ram is a good boy";
function removeSpace(str){
    let result = "";
    for(let ele of str){
        if(ele !== " "){
            result = result + ele
        }
    }
    return result;
}
console.log(removeSpace(str3));


// 4.) Count the sum of numbers in a string 
const str4 = '4PREP2INSTAA6';
function getSumOfNumberInString(str){
    let sum = 0;
    for(let ele of str){
        if((ele>='A' && ele<='Z') || (ele>='a' && ele<='z')){
            continue;
        }else{
            sum += +ele;
        }
    }
    return sum;
}
console.log(getSumOfNumberInString(str4))


// 5.) Capitalize the first and last character of each word of a string :
const str5 = 'ram is good boy';

function capitalizeFirstLast(str){
    str = str.trim()
    let result = "";
    const strArr = str.split(" ");
    for(let ele of strArr){
        let data = ele.slice(0,1).toUpperCase() + "" + ele.slice(1,ele.length-1) + ele.slice(-1).toUpperCase();
        result += " " + data;
        
    }
    return result.trim();
}
console.log(capitalizeFirstLast(str5))

// 6.) Calculate frequency of characters in a string 
const str6 = "himalaya this the greatest";
function findFrequencyChar(str){
    let resultObj = {}
    for(let s of str){
        // console.log(s)
        if(resultObj[s]){
            resultObj[s] = resultObj[s] + 1;
        }else{
            resultObj[s] = 1;
        }
    }
    return resultObj;
}
console.log(findFrequencyChar(str6))
