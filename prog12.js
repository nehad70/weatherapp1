//write a progrsmme to display the largest number from the given three numbers and also sor the three numbers in descending order
var num =20
var num= 30
var num=10
if ( num1>num2 && num1>num3){
    if(num2>num3)
    {
        console.log(`second largest number:${num2}`);
        console.log (`sort in descending: ${num1},${num2},${num3}`);
    }
    else{
        console.log(`second largest number:${num3}`);
        console.log (`sort in descending: ${num1},${num3},${num2}`);
    }
    
}
elseif ( num2>num1 && num2>num3){
    if(num1>num3)
    {
        console.log(`second largest number:${num1}`);
        console.log (`sort in descending: ${num2},${num1},${num3}`);
    }
    else{
        console.log(`second largest number:${num3}`);
        console.log (`sort in descending: ${num2},${num3},${num1}`);
    }
    
}
else if ( num3>num1 && num3>num2){
    if(num1>num2)
    {
        console.log(`second largest number:${num1}`);
        console.log (`sort in descending: ${num3},${num1},${num2}`);
    }
    else{
        console.log(`second largest number:${num2}`);
        console.log (`sort in descending: ${num3},${num2},${num1}`);
    }
    
}


