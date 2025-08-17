var a = {
    house1: {'harry','ron','hermoine' },
    house2: {'draco','goyle'},
dateofdata: '2025-01-01',
createdby : 'albud dumbledore'
}

var student = {name:'vihaan', age:14,intro:function(){console.log(" hi my name is vihaan")} }

console.lo(a.house1);
console.log(a.dateofdata);
student.intro();

console.log(math.PI );
console.log(math.random);
console.log(math.ceil(9.9));
console.log(math.floor(9.9));

// console.log(document) here document refers to the whole website we will work later on

function add(){
    var i = 0;
    var result = 0
    for (i = 0 , i < arguments.length, i++){
        result = aguments[i] + result;
    }
    return result;

}

console.log(add(1,2,3,4,5,6,7,8,9,10))
