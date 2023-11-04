 pattern = 'ABABBABAA'

// w.a.p to print the first recursive letter



//algorithm

//string is converted into array of letters
characters = pattern.split('')
console.log(characters);
//create an empty obj
 obj ={}
//fetch each letters from array - for of
for(let char of characters){
    if(char in obj){
        console.log('first recursive letter is :',char);
        break
    }
    else{
        obj[char]=1
    }
}


// check these letters in the objects - in
// present - print the letter
// else - add that letter to objects
// arr = [10,20,10,20,20,30,40,50,70,60,50]
//print all number count

arr = [10,20,10,20,20,30,40,50,70,60,50]
word = {}
for(let count of arr){
    if(count in word){
        word[count]+=1
    }
    else{
        word[count]=1

    }
}
console.log(word);