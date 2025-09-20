function form(){
    var f  = document.forms["blinkit"];
    console.log(f);


if(f["username"].value == "abc"|| f["username"].value == "xyz"){
alert(" please type correct username");
return;
}

if(f["password"].value == "1234"|| f["password"].value == "6789"){
    alert(" please type correct password");
    return;
    }

    if(f["phonenumber"].value=="1234567890"|| f["phonenumber"].value=="0987654321"){
        alert(" please type correct phone number");
        return;
        } 
        
        //to save the data to the backend
    }


