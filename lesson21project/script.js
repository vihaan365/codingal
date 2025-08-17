var a = {name: "harry potter", age: " 13 years old", introduce:function(){console.log(" my name is " + this.name + " and i am " + this.age )} ,
    makesound:function(r){console.log(" i am making sound " + r)}}

    console.log(a.name);
    console.log(a.age);
    a.introduce();
    a.makesound("parscel toungue");

    var c;
    for (c = 0; c < 100; c++)
    {
        a.introduce();
    } 

    var day = 4;
    switch(day){
        case 1:console.log("today is monday");
        break;
        case 2:console.log("today is tuesday");
        break
        case 3:console.log("today is wednesday");
        break
        default:console.log("today is a default day");
    }