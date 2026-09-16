

function isPalindrome(str){

let result = ""

for(let i=str.length-1; i>=0 ; i--){

  result += str[i];

  
}
 if(result === str)


    {
        console.log("isPalindrom ",result);
        

    } else{
          console.log("isnotPalindrom ",str);
    }
    
}


isPalindrome("prasath")
