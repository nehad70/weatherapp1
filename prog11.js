//w.a.p to display the 'fizz' the number is divisible by 3
//'buzz'if the number is divisible by 5
//'fizzbuzz' the number is divisible by 5 3and 15
num=30

if(nuM%15==0){ 
console.log('fizzbuzz');


}
else if(num%5==0){
    console.log('buzz')
}
else if(num%3==0)
{
    console.log('fizz')
}else{
    console.log ('not divisible by 5 3 and 15');
}




//w.a.p to display largest among the three input numbers
var num1=100
var num2=200
var num3=300
 if (num1>num2 && num1>num3)
 {
    console.log(` the largest number is ${num1}`);
 }
  else if (num2>num1 && num2>num3)
 {
    console.log(` the largest number is ${num2}`) ;
 }else if (num3>num1 && num3>num2)
 {
    console.log(` the largest number is ${num3}`);
 }else{
    console.log(`all are equal`);
 }
 