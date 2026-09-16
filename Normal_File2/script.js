function isPalindrome(str){
  
    let reversed=str.split('').reverse().join('');

     let result = str === reversed;

     return result

}

console.log(isPalindrome("madam"));





function ReversedString(str){

    let result =""

    for(let i = str.length-1; i>=0; i--){

        result +=str[i]
    }

    return result ;


}

console.log(ReversedString([1,2,3]));
 

