var a = [14,28,-42,56,70,84,98,-112,126];

console.log(a[3]);
console.log(a.length);
console.log(a[a.length-3]);
console.log(a[8-4]);
console.log(a[2+8*3%6]);

a.forEach(element => console.log(element));

function sum(){
    return a+b+c;
}

function average(){
    return(a+b+c)/3;
}

var avg= average(30,50,70);
console.log(avg);