expense=[12000,13000,14000,15000]
// find the lowest expense 
lowest=expense[0]
for(let num of expense){
    if(num<=lowest){
        lowest=num
    }
}
console.log(lowest);

// find he highest expense
highest=expense[3]
for(let num of expense){
    if(num>=highest){
        highest=num
    }
}
console.log(highest);
// find the total expense
console.log(`-----------`);
sum=0
for(let num of expense){
    sum+=num
}
console.log(sum);