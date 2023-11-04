input=3
i=0
str= ``
sum=0
while(i<input){
    str=str+input //3//3+33//3+333
    console.log(str);
    sum=sum+Number(str)//0+3//3+33//36+333
    i++

}
console.log(`result`,sum);

console.log(`------------------------`);


//4
//4+44+444+4444
input=4
i=0
str= ``
sum=0
while(i<input){
    str=str+input //4//4+44//4+444//4+4444
    console.log(str);
    sum=sum+Number(str)//0+4//4+44//48+444
    i++

}
console.log(`result`,sum);
console.log(`--------------------`);



input=5
i=0
str= ``
sum=0
while(i<input){
    str=str+input //5//5+55//5+555
    console.log(str);
    sum=sum+Number(str)//0+5//5+55//60+555
    i++

}
console.log(`result`,sum);
console.log(`----------------------`);



inp=3
j=1
str=(``)
pro=0
while(j<=inp){//1<=3//2<=3//3<=3
    str=str+j//1//12//12+3=123

 j++
}
pro=inp*str
console.log(pro);
console.log(`------------------`);





inp=4
j=1
str=(``)
pro=0
while(j<=inp){//1<=4//2<=4//3<=4//4<=4
    str=str+j//1//12//12+3=123//123+4


 j++
}
pro=inp*str
console.log(pro);
console.log(`---------------------------`);


//w.a.p to displ a reverse of a  given number
//sum=0
//rem =num%10=3//12%10=2//1%10=1
//sum= sum *10+rem=3//30+2=32//320+1=321/
//num=num/10=12.3 //



num=8963
sum=0
reminder=0
while(num>0){
    reminder=num%10
    sum=sum*10+reminder
    num=parseInt(num/10)
}
console.log(`reverse of the number `,sum);
console.log(`-----------------------------`);



//w.a.p to check whether a given number is palindrome or not


num=123321
reverse=0
reminder=0
temp=num
while(num>0){
    reminder=num%10
    reverse=reverse*10+reminder
    num=parseInt(num/10)
}
console.log(`reverse of the number is : `,reverse);
if(temp==reverse){
    console.log(`palindrome`);
}else{
    console.log(`not a palindrome`);
}
console.log(`-----------------------------`);



//w.a.p to check whether a number is factorial or not


num=4
i=1
fact=1
while(i<=num){//1<=4//2<=4//3<=4//4<=4
    fact=fact*i//1*1//1*2//2*3//6*4=24
    i++
}
console.log(fact);



console.log(`-----------------------`);






//w.a.p to check whether the given three digit number is armstong or not
//153=1**3+5**3+5**3+3**3  = 1+125+27=153

num=153
temp=num
remainder=0
sum=0
while(num>0){
    reminder=num%10
    sum=sum+(remainder**3);
    num=parseInt(num/10)

}
if(temp==sum){
    console.log(`armstong`);
}else{
    console.log(`not armstrong`);
}
console.log(`-------------------------`);





//w.a.p to display numbers whose exponential is in the range 8to 36
//user can input power ( exponential value)
//power =3
//1 2 3  4  5  6  7
//1 4 9 16 25 36 49
//1 8 27 64
 power =3
 num=1
 while(num<=36){
    if (8<=num**power && num**power<=36){
        console.log(num);
    }
    num++
 }
console.log(`-----------`);
power=2
num= 1
while(num<=36){
    if(8<=num**power && num**power<=36){
        console.log(num);
    }
    if(num*power==36){
        break
    }
    num++
}
console.log(`------------`);
//








