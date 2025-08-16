var a = {name: "john pork", age: " dead but still alive", introduce:function(){console.log("my name is " + this.name + " and i am" + this.age )}
 ,makesound:function(y){console.log("i am making sound" + y)}}

 console.log(a.name);
 console.log(a.age)
 a.introduce();
 a.makesound("oink oink")

 var b 
 for (b = 0 ;b<100; b++ ) {
    a.introduce(); 
 }

 var day = 4

 switch(day){
    case 1:console.log("today is monday")
    break;
    case 2:console.log("today is tuesday")
    break;
    case 3:console.log("today is wednesday")
    break;
    default:console.log("today is a defult day")
 }