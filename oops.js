//creation of class
class Employee{
    //property= variables inside class
    empId
    empName
    empSalary
    //constructors= to initialize a property
    constructor(id, ename,desg,salary){//instance variable this.property_name
         this.empId=id
         this.empName=ename
         this.empSalary=salary
         this.empDesg=desg  
    }

    //methods= functions inside class 
    display(){
        console.log(`employee id is ${this.empId},employee name is ${this.empName},employee designation is ${this.empDesg},
        employee salary is${this.empSalary}`);
    }
}
//cetaion of an object
const emp1=new Employee(1000,`nehad`,`developer`, 250000)
emp1.display()



console.log(`---------------------------`);
class Student{
    stdid
    stdname
    std_place
    stdsub
    constructor(id,name , place,sub){
        this.stdid=id
        this.stdname=name
        this.std_place=place
        this.stdsub=sub
    }
    display(){
        console.log(`student id is${this.stdid} student name is${this.stdname} student place is${this.std_place} student sub is${this.stdsub}`);
    }

}
const std1=new  Student(1,`nehad`, `kerala`,`computer science`)
std1.display()