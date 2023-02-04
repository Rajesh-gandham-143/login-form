function fun(){
    let user = document.getElementById('txt');
    let pass = document.getElementById('ps');
    
     
     if(user.value.trim()==""){
        alert("cannot be empty");
        user.style.border="solid 3px red";
        document.getElementById('us').style.visibility='visible';
        return false;
    }
    else if(pass.value.trim()==""){
        pass.style.border="solid 3px red";
        document.getElementById('pss').style.visibility='visible';
        alert("cannot be empty");
        return false
    }
    else if(pass.value.length<=5){
        alert("password is in between 6 to 15 characters");
        pass.style.border="solid 3px red";
        return false;
    }
     
    else if(user.value === pass.value){
        alert("both are same");
        return false;
    }

}
function eye(){
var x=document.getElementById('ps');
    var y=document.getElementById('hide1');
    var z=document.getElementById('hide2');
    if(x.type==='password'){
        x.type='text';
        y.style.display='block';
        z.style.display='none';
    }
    else{
        x.type="password";
        y.style.display='none';
        z.style.display='block';
    }
}