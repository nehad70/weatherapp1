// nested loop -------loop with in a loop
//w.a.p to print the given pattern



//  # # # #
//  # # # #
//  # # # #
//  # # # #



for(row=1;row<=4;row++){
    str=``
    for(col=1;col<=4;col++)
        {
            str=str+`#`
        }
       console.log(str); 
}
console.log(`-------`);





for(row=1;row<=4;row++){
    str=``
    for(col=1;col<=4;col++)
        {
            str=str+row+" "
        }
       console.log(str); 

}
console.log(`----------------`);

//    *
//   * * 
//  * * * 
// * * * *

for(row=1;row<=4;row++){
    str=``
    for(col=1;col<=row;col++){
     str= str+`*`
    }
  console.log(str);
}



console.log(`-----------------`);
// 1
// 1 2
// 1 2 3
// 1 2 3 4
for(row=1;row<=4;row++){
    str=``
    for(col=1;col<=row;col++){
        str= str+col+``
    }
    console.log(str);
}
console.log(`------------------`);

//1
//2 2
//3 3 3
//4 4 4 4
for(row=1;row<=4;row++){
    str=``
    for(col=1;col<=row;col++){
        str=str+row
    }
    console.log(str);
}
console.log(`--------------`);

// * * * *
// * * *
// * *
// *

for(row=4;row>=1;row--){
    str=``
    for(col=1;col<=row;col++){
        str=str+`*`
    }
    console.log(str);
}
console.log(`--------------------------`);
// * 
// * *
// * * *
// * * * *
// * * *
// * *
// *
console.log(`------------`);
for(row=1;row<=4;row++){
    str=``
    for(col=1;col<=row;col++){
     str= str+`*`
    }
  console.log(str);
}
for(row=3;row>=1;row--){
    str=``
    for(col=1;col<=row;col++){
        str=str+`*`
    }
    console.log(str);
}
console.log(`--------------------`);
//    *
//   * *
//  * * * 
// * * * *
for(row=1;row>=4;row++){
    str=``
    for(spa=4;spa>row;spa--){
        str=str+``
    }
    for(col=1;col<=row;col++){
        str=str+`* `
    }
    console.log(str);



}
//      *
//     * *
//    * * *
//   * * * * 
//    * * * 
//     * * 
//      *
console.log(`-----------`);
//      *
//    *   *
//   *     *
//  * * * * * 
for(row=1;row<=4;row++){
    str=``
    for(col=1;col<=7;col++){
        if(row+col==5||col-row==3||row==4){
            str=str+`*`
        }
        else{
            str=str+` `

        }
    }
    console.log(str);
}
console.log(`-----------------`);
// * * * * * 
// *       *
// *       *
// *       *
// * * * * * 

for(row=1;row<=5;row++){
str=``
  for(col=1;col<=5;col++){//1<=5//2<=5//3<=5//4<=5//5<=5
     if(row==1 || row==5||col==1||col==5){
        str=str+`* `
     }
     else{
        str=str+`  `
     }
    }
    console.log(str);
}
console.log(`----------------`);
// 1
// 0 1
// 0 1 0 
// 0 1 0 1
// 0 1 0 1 0


for(row=1;row<=4;row++){
    str=``
    for(col=1;col<=row;col++){
        let n=(row+col)%2
        if(n==0){
            str=str+1
        }else{
            str=str+0
        }
    }
    console.log(str);
}
console.log(`------------------`);
// *
// * *
// *   *
// *     *
// * * * * *

for(row=1;row<=5;row++){
    str=``
    for(col=1; col<=row;col++){
        if(col==1||row==5||col==row){
            str-str+`*`
        }else{
            str=str+` `
        }

    }
    console.log(str);

}



