//Arrow 


const sum = (a,b) => {
    return a+b;
}


const ans = sum(1,2);
console.log(ans);


//Map and filters 
//Given an array give me back a new array in which every value is multiplied by 2

const input =[1,2,3,4,5];

const newArray =[];
//This is not the correct way 
for(let i=0;i<input.length;i++){
    newArray.push[input[i]*2];
}

console.log(newArray);


//Another way to solve this problem

function transform(i){
    return i*2;
}


const ans2 = input.map(transform);
console.log(ans2);

const ans3 = input.map(function(i){
    return i*2;
});


//Filter 

function filterLogic(n){
    if(n%2==0){
        return true;
    }
    else{
        false;
    }
}


const ans4 = input.filter(filterLogic);
console.log(ans4);