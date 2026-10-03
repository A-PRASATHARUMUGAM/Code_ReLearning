
                    //1. Find the Date

// let todayDate= new Date();

// let day= todayDate.getDate();
// let month= todayDate.getMonth();
// let year = todayDate.getFullYear();


// console.log(`
//     Day of Day ${day}, 
//     Day of Month ${month}, 
//     Day of year ${year}`);




                        //2. var, let, const

// 1. var 

//Reduclarion 
//Re Assign 


// 2. let 
//Re-Assign Only
// let  a = 20 ;
// a =30;


//3. const 
// Non of them 
// console.log(a);



                    //3. Data Types in JavaScript 

// 1.Premitive Data Type 

/*
1. Number 
2. String 
3. Boolean 
4. Null 
5. Undefine 
6. Symboles 
7. BigInt 

*/ 



// Undefine - it is do the JavaScript engine 

// let v1;

// console.log(v1);

// Null   - We exciplitly set it to empty of now

// let v2 = null;
// console.log(v2);



// 2.Reference Data Type 

/*
1. Array 
2. Object 
3. Date 
*/
// 1. Array 
// let arr1= [1,2,3,4,5,6];
// let arr2= arr1;

// console.log(arr2[0]);


// console.log(arr2);
// arr2[0]=6; 
// console.log(arr2);

// console.log(arr1);

// 2.Object
// let obj1={name:"Kandhan",age:"22"};


// let obj2= obj1

// console.log(obj2);

// obj2.name ="Prasath"

// console.log(obj1);
// console.log(obj2);



                                // 4. Destructuring  in JavaScript 

// let final = [...arr1,...arr2]

// console.log(final);

// 1.Array Destructuring 

    // let arr1 = [1,2,3,4,5]
    // console.log(arr1);

    // let [one,two,three] = arr1

    // console.log(one,two,three);

// 2. Object Destructuring 

    // let obj1= [
        
    //     {fname:"Prasath", age:"22"},
    //     {fname:"Kandhan", age:"22"}
    // ]

//     let {value}=obj1;

//     console.log(value);
    
// obj1.forEach((val)=>{

//     let {fname,age}=val;

//     console.log(fname,age);
    
// })



// let obj2 = {fname:"Priya", age:"22"}

// let {fname:firstName,age}= obj2;

// console.log(firstName,age);

// let {...all} = obj1;

// console.log(all);




//4. Different Types of Function 



//  Function declaration  
// function myfunction1(val){

//     val.forEach(({fname,age})=>{
              
//         // let {fname,age}= arg

//         console.log(fname,age);
                 
//     })

// }

// myfunction1(obj1)


                               