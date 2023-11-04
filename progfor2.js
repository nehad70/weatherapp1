//w.a.p to find hcf of a given number
//12-1 2 3 4 6 12
//18- 1 2 3 6 18 
// 1  2 4


n1=12
n2=20
for(i=1;i<=n1 && i<=n2;i++)
{
    if(n1%i==0 && n2%i==0){
        gcd=1
    }
}
console.log(gcd);