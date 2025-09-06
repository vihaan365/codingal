class wizards {
    constructor(name,age,house){
        this.name = name;
        this.age = age;
        this.house = house;
    }
    display(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.house);
    }
}

class best wizard extends wizards{
    constructor(name,age,house,spell){
        super(name,age.house);
        this.spell=spell;
    }
    display(){
        super.display();
        console.log(this.spell);
    }
        
}
var wizard1 = new wizards("harry potter", 17 , "gryffindor");
var wizard2 = new wizards("draco malfoy", 18 , "slyterin");

console.log(wizard1.house);

wizard1.display();
wizard2.display();

