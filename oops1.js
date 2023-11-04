class Bank{
    accountDetails={
        1000:{acno:1000,username:`userone`,password:`userone`,balance:500},
        1001:{acno:1001,username:`usertwo`,password:`usertwo`,balance:500},
        1002:{acno:1002,username:`userthree`,password:`userthree`,balance:5000},
        1003:{acno:1003,username:`userfour`,password:`userfour`,balance:50000},
        1004:{acno:1004,username:`userfive`,password:`userfive`,balance:500000}
    }

//method to validate given account number
  validateAccount(acno){
        return acno in this.accountDetails?true:false
  }

//method to authenticate a number
authenticateAccount(acno,pswd){
    if(this.accountDetails(acno)){
        if(this.accountDetails[acno].password==pswd){
            console.log(`autenticaiton successful`);
        }
        else{
            console.log(`autenticaiton unsuccessful`);
        }

    }
}

//method to balance enquiry
getbalance(acno,pswd){
    if(this.validateAccount[acno]){
        if(this.accountDetails[acno].password==pswd){
            console.log(`current balane of ${acno} is :${this.accountDetails[acno].balance}`);
        }else{
            console.log(`invalid password`);
        }
    }else{
        console.log(`invalid account`);
    }
}
//method to find transfer
}
//onjects

const user1 = new Bank()
console.log(user1.validateAccount(1000)?`account available`:`not available`);
console.log(`-----------------`);
user1.authenticateAccount(1000,"userone")
console.log(`-------------------------`);
user1.getbqalance(1000,`usertwo`)