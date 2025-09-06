var bacteria_size_in_micron = [0.0005 , 90000,0.08 , 0.0000000060,9.5 , 8000, 0.777 , 9.00009];

console.log(bacteria_size_in_micron);
//this will sort the array in decending order by inner function
bacteria_size_in_micron.sort(function(a, b){return b - a});

console.log(bacteria_size_in_micron);


//this will sort the array in acending order by the outer function 
function dg (a, b){
    return a - b
}
bacteria_size_in_micron.sort(dg);
console.log(bacteria_size_in_micron);

function mm (a){
    return a*1000
}

bacteria_new = bacteria_size_in_micron.map(mm);
bacteria_new = bacteria_size_in_micron.map(v=>v*1000);
bacteria_new = bacteria_size_in_micron.map((v)=>{return v*1000});
bacteria_new = bacteria_size_in_micron.map(v=>{return v*1000});
bacteria_new = bacteria_size_in_micron.map(a=>a*1000);

console.log(bacteria_new);


