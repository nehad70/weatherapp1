// check whether the array contains 2 or not


searchitem=2
isfound=false

for(let num of arr){
    if(num==searchitem){
        isfound = true
        console.log(`present`);
        break;

    }
}
if(isfound==false){
    console.log(`number not found`);
}

//input=[4,5,6]
//output=[11,10,9]
//5+6 4+6 4+5
//15-4 15-5 15-6