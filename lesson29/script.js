var a = {name  : "John" , age: 30 , city: "New York", country: "USA", };

console.log(a);

a = JSON.stringify(a);

console.log(a);

a = JSON.parse(a);

console.log(a);

function hello(x){
    console.log(" hu hu hu hu hu hu hu hu hu hu hu hu hu hu hu hu hu hu hu");
    x()//callback function
    console.log("la la la la la la la la la la la la la la la la la la la la");
}

hello(()=>{
    console.log("by by by by by by by by by by by by by by by by by by by by");
    console.log("see you see you see you see you see you see you see you see you");
})

setTimeout(()=>{
    console.log("messi is the worst player in the world");
}, 5000);

var myPromise = new Promise((resolve, reject)=>{
    let a = 1+3

    if(a == 2){
        resolve("success");
    } else {
        reject("failed");
    }

});

myPromise.then((a)=>{
    console.log("this is in the then " , a);
}).catch((a)=>{
    console.log("this is in the catch " + a);
});
