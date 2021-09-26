// Assignment -1 (Functions)

// Part-01

//Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.

function callback(inputNumber){
    return inputNumber**2 ;
}

function sumSquare(number1 , number2,functionName)
{
    let result = number1+number2 ;
    return functionName(result) ;
} ;
// Takes two numbers as inputs then calls the callback method to result the square of their sum .
console.log(sumSquare(10 ,20 ,callback)) ;



// Part-02 

/*  Q2. An arrow function takes two arguments firstName and lastName and returns a 2 letter string 
    that represents the first letter of both the arguments. 
    For the arguments Roger and Waters, the function returns ‘RW’.*/

    nameArrow = (firstName , lastName) => (firstName[0] + lastName[0]) ;

    result = nameArrow("Abhigyan" ,"Pandey") ;

    console.log(result) ;