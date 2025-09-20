var d  = {name: "vihaan", age: 13, class: "ninth", school: "st. xavier's", city: "mumbai", country: "india"};
console.log(d);

d = JSON.stringify(d);

console.log(d);

d = JSON.parse(d);

console.log(d);

function bye(y){
    console.log(" go go go go go go go go go go go go go go go go go go go go");
    y()//callback function
    console.log("hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi hi");
}
bye(()=>{
    console.log("see you see you see you see you see you see you see you see you");
    console.log("by by by by by by by by by by by by by by by by by by by by");
}
)

setTimeout(()=>{
    console.log("ronaldo is the best player in the world");
}, 3000);       
var myPromise = new Promise((resolve, reject)=>{
    let d = 1+1
    if(d == 2){
        resolve("success");
    }
    else {
        reject("failed");
    }
});
myPromise.then((d)=>{
    console.log("this is in the then " , d);
}).catch((d)=>{
    console.log("this is in the catch " + d);
}
);
