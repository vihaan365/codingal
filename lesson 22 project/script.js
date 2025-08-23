var a ={
    house1: { ronaldo , benzema},
    house2:{neymar, messi , suarez},
    dateofdata:"2025-08-23",
    createdby:"fifa president",
}

var student = {name:'vihaan', age:14,intro:function(){console.log(" hi my name is vihaan")} }
console,log(a.house1);
console.log(a.createdby);
student.intro();



console.log(Math.random);
console.log(Math.PI);
console.log(math.ceil(9.9));
console.log(math.floor(9.9));
//console.log(document) here document refers to the whole website that we will work upon later
function add(){
    var i=0;
    var result=0;
    for(i=0; i<arguments.length; i++){
        result=arguments[i]+result;
    }
    return result;
}

console.log(add(1,2,3,4,5,6,7,8,9,10));
