var length_of_8_houses_in_m = [25,3000,500,17,10000 , 900 , 1500, 50];

//this will arrange the array in acending order
length_of_8_houses_in_m.sort(function(a,b){return a-b});
console.log(length_of_8_houses_in_m);

//this will arrange the array in desending order by outer function
function hg(a,b){
    return b - a
}
length_of_8_houses_in_m.sort(hg);
console.log(length_of_8_houses_in_m);

function ag (a){
    return a*1000;
}

new_length = length_of_8_houses_in_m.map(v=>v*1000);
new_length = length_of_8_houses_in_m.map((v)=>{ return v*1000});
new_length = length_of_8_houses_in_m.map(v=>{return v*1000});
new_length = length_of_8_houses_in_m.map(ag);
new_length = length_of_8_houses_in_m.map(a=>a*1000);

console.log(new_length);


