const global= `global`

const  parent=()=>{
     let parentpro=`parent`
        child =()=>{
            let childpro=`child`
            console.log(`global is ${global} and parentpro is ${parenpro}and child property is ${childpro}`);
        }
        child()
}

parent()


// w.a.p to check whether a given number is mobile number or not using arrow function

const validatemobile =(mobile)=>{
    return mobile.length==10?`&{mobile} is a valid mobile number`:`${mobile} is not a valid mobile number`
}
console.log(validatemobile(7034362032));
// w.a.p to check whether the given mail id is gmail or not
  const mail=(gmail)=>{
    return email.endswith(`gmail.com`)?`${email} is a valid gmail`:`${email} is not a valid gmail`
  }
  console.log(email(`luminar@gmail.com`));