var a = "hello myself vihaan";
var b = 40000;
var c = 4.10007;
var d = "true";
var e = "false";
var f = "7000";

console.log(typeof(c));

c = Boolean(c);

console.log(c);
console.log(typeof(c));

console.log(typeof(f));
f = Number(f);

console.log(f);
console.log(typeof(f));     

console.log(typeof(a));
a = Number(a);

console.log(a);
console.log(typeof(a));

d = Number(d);
e = Number(e);  

console.log(d);
console.log(e);


b = "my leg was saying that i wan to play football but football doesn't want to play with me because i don't play football properly";
    m = b.search("football");   
    console.log(m);

    function az (a){
         return a*100;
    }

    var aaz = a => a*100;
    console.log(az(7));
    console.log(aaz(70));
    console.log(az(700));       
