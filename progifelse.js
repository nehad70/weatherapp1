// write a program swap b/w two numbers

// before num1=20 num2=30 after swap num1=30 num2=20


// create two numbers
var num1 = 20
var num2 = 30

console.log(`value of num1 and num2 before swap is ${num1} and ${num2}`)

// create a variable temp

var temp

// assign num1 value to temp
temp=num1

// assign num2 value to num1
num1=num2

// assign temp value to num2
num2=temp


// display num1 and num2  

console.log(`value of num1 and num2  after swap is ${num1} and ${num2}` );


console.log('------------------------------------------------------------');


num3= 40
num4= 60


console.log(`value of num1 and num2  after swap is ${num3} and ${num4}` );


num3=num3+num4 // 100
num4=num3-num4 // 40
num3=num3-num4// 100-40


console.log(`value of num1 and num2  after swap is ${num3} and ${num4}` );
[11:15 AM, 8/16/2023] abhiram Mern: // write a program check whether the the person is eligible or not for the vote

var age =30

if (age>=18) 
{ console.log('eligible');
    
}

else
{
    console.log(' note eligible');
}


console.log('----------------------------------------------------');

// write a program to check whether a given number is positive or negative

var num = 0

if (num>0) {
    console.log('number is positive');
    
}
 else if (num==0) {
    console.log('neither positive or negative');
    
 }
 else{
    console.log('number is negative');
 }


 
console.log('----------------------------------------------------');

// write a program to display largest among two numbers


var num1= 30
var num2= 1000

if (num1>num2) {
    console.log(`largest number is ${num1}`);
    
}

else if (num2>num1) {
    console.log(`largest number is ${num2}`);
    
} 

else {
    
    console.log('both  numbers are equal');
}


console.log('----------------------------------------------------');


// ternary oprators
console.log(age>=18? 'eligible': "not eligible");


console.log('----------------------------------------------------');


console.log(num>0? 'positive': num==0? 'either positive or negative':'negative');



console.log('----------------------------------------------------');



console.log(num1>num2? `largest number is ${num1}`: num2<num1? `largest number is ${num2}`:'both are equal');