class player {
    constructor(name, age , jersey , club){
 this.name = name
 this.age = age 
 this.jersey = jersey
 this.club = club 
    }

 display(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.jersey);
    console.log(this.club);
 }
 
 
    }

    class team extends player{
        constructor(name,age,jersey,club,country){
            super(name,age,jersey,club);
            this.country = country;
        }
        display(){
            super.display();
            console.log(this.country);
        }
    }


var player1 = new player( "ronaldo", 39 , 7 , "al-nassr" );
var player2 = new player("messi", 38, 10  , "intermiami");


console.log(player1.club);

player1.display()
player2.display()