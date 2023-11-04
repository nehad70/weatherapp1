employee=[
    [10005,`nehad`,`devoloper`,`kochi`,25000,3],
    [10003,`dayan`,`tester`,`kanur`,20000,2],
    [10004,`vyshak`,`engineeer`,`malappuram`,22000,1],
    [10008,`sreerag`,`devoloper`,`kochi`,28000,4],
]
//print the totatl number of employee
console.log(`total number of employee`);
console.log(employee.length);
console.log(`---------------`);
//print devoloper employee details
console.log(`devolper details`);
employee.filter(emp=>emp[2]=='devoloper').forEach(employ=>{console.log(employ);})
console.log(`----------------`);
// print the employ name who has the highest salary
console.log(`highest salary`);
highsalary=employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log(highsalary[1]);
console.log(`-----------`);
//to print lowest salary
console.log(`lowest salary`);
lowsalary=employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
console.log(lowsalary[1]);
//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]

]


//1. display all product name

console.log('all products name');
products.map(pro=>pro[1]).forEach(products=>{console.log(products);})

console.log('--------------------------------------------');

//2. display product whose price < Rs.50

console.log('products price < rs.50');
products.filter(pro=>pro[2]<50).forEach(products=>{console.log(products);})

console.log('--------------------------------------------');

//3. print price of oreo

console.log('price of oreo');
oreo=products.find(pro=>pro[1]=='oreo')
console.log(oreo[2]);
console.log('--------------------------------------------');

//4. print costly product name

console.log('costly product name');
highest=products.reduce((pro1,pro2)=>pro1[2]>pro2[2]?pro1:pro2)
console.log(highest[1]);
console.log('--------------------------------------------');

//5. display out of stock product
console.log('products that are out of stock:');
outofstock=products.filter(pro=>pro[3]==0).forEach(pro => {console.log(pro[1]);})
console.log('------------------------------------------');


//6. sort products based on stock in decsending order

console.log('stock based on desending order');
products.sort((pro1,pro2)=>pro2[3]-pro1[3]).forEach(products=>{console.log(products);})

console.log('--------------------------------------------');

//7. print product having maximum available stock

console.log('maximum available stock');
highest=products.reduce((pro1,pro2)=>pro1[3]>pro2[3]?pro1:pro2)
console.log(highest[1]);

console.log('--------------------------------------------');

//8. is there any product that can be purchased by Rs.10

console.log('products with rs 10');
proprice=products.some(pro=>pro[2]<=10)
console.log(proprice?'yes':'no');

console.log('--------------------------------------------');

//9. Is there any product in the range of 10 to 30 Rs

console.log('product that can be purchased b/w 10 to 30 rs');
prorange=products.some(pro=>pro[2]<=10 && pro[2]<=30)
console.log(prorange?'yes':'no');

console.log('--------------------------------------------');

//10. print all products in the range of 10 to 30 Rs

console.log('product that can be purchased by 10 to 30 rs');
proranges =products.filter(pro=>pro[2]>=10 && pro[2]<=30).forEach(pro => {console.log(pro[1]);})


console.log('--------------------------------------------');



//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
console.log('District highest positive case');
highcase = covid_data.reduce((covid1,covid2)=>covid1[2]>covid2[2]?covid1:covid2)
console.log(highcase[1]);
console.log('-------------------------------------------------------------------');
//2. district having Highest 1st dose vaccine
console.log('District highest 1st dose vaccine');
highvaccine = covid_data.reduce((dose1,dose2)=>dose1[5]>dose2[5]?dose1:dose2)
console.log(highvaccine[1]);
console.log('----------------------------------------------------------------------');
//3. district having lowest death rate
console.log('District having lowest death rate');
lowdeathrate = covid_data.reduce((lowest1,lowest2)=>lowest1[3]<lowest2[3]?lowest1:lowest2)
console.log(lowdeathrate[1]);
console.log('----------------------------------------------------------------------');
//4. sort data with +ve case in descending order
console.log('sort data with +ve case in descending order');
covid_data.sort((covid1,covid2)=>covid1[2]-covid2[2]).forEach(covid=>{console.log(covid[1]);})
console.log('------------------------------------------------------------------');
//5. is district with +ve cases > 15000
console.log('district with +ve cases > 15000');
covid_data.filter(covid=>covid[2]>15000).forEach(rate=>{console.log(rate);})
console.log('------------------------------------------------------------------');
//6. sort data with 1st dose vaccine
console.log('sort data with 1st dose vaccine');
covid_data.sort((covid1,covid2)=>covid1[5]-covid2[5]).forEach(covid=>{console.log(covid[1]);})
console.log('------------------------------------------------------------------');
//7. Print Thrissur details
console.log(`Thrissur details`);
thrissur=covid_data.find(district=>district[1]=='Thrissur')
console.log(thrissur);
console.log('-------------------------------------------------------------------');
//8. Print total number of positive cases
console.log('Total Number of positive cases');
total = covid_data.map(covid=>covid[2]).reduce((covid1,covid2)=>covid1+covid2)
console.log(total);
console.log('--------------------------------------------------------------------');
//9. Print total number of curred cases
console.log('Total Number of curred cases ');
total = covid_data.map(covid=>covid[4]).reduce((covid1,covid2)=>covid1+covid2)
console.log(total);
console.log('--------------------------------------------------------------------');
//10. Print curred cases in Idukki
console.log('Curred cases in Idukki');
curredcase = covid_data.find(covid=>covid[1]=='Idukki')
console.log(curredcase[4]);
console.log('---------------------------------------------------------------------');




//
numbers=[[10,20,[34,57]],
         [30,40],
         [50,[63,89],60],
         [23,56],
         [100,45]
        ]


//find the numbers grater than 50
console.log(`numbers grater than 50`);
console.log(numbers.flat(Infinity).filter(num=>num>50))

console.log('---------------------------------------------------------------------');



// find the largets number
console.log(`laegest number`);
console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1>num2?num1:num2));


console.log('---------------------------------------------------------------------');


//find the smallest numbers 
console.log(`smallest number`);
console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1<num2?num1:num2));


console.log('---------------------------------------------------------------');
//find the total sum of all numbers
console.log('Total Numbers');

console.log(numbers.flat(Infinity).reduce((num1,num2)=>num1+num2));
console.log('---------------------------------------------------------------');