//exception handling
exp = "10*2+5"
console.log(`exception handling`);
const result =eval(exp)
console.log(result);
console.log(`task completed`);
try{
    const result =eval(exp)
    console.log(result);
}catch{
    console.log(`error in evaluation`);

}finally{
    console.log(`task completed`);
}
