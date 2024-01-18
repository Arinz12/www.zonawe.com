async function check(){
    var ques=document.getElementById("locationi").value;
    var messbo=document.querySelector("span");
    if(ques==null||!isNaN(ques)||ques.length<4){
        messbo.innerHTML="Please Enter a vaalid location";
        
        return false;
    }
    else{try {
        var ur="https://api.weatherapi.com/v1/current.json?key=4b317c33d78640c0a4895731241501&q=";
        var url=ur+ques;
        document.querySelector("span").innerHTML="";
        
 var result= await fetch(url,{mode:"cors"});
 var result2= await result.json();
 
 console.log(result2);
var ad="https:"
 var place=result2.location.name;
 var icon=result2.current.condition.icon;
 var temc=result2.current.temp_c;
 var tempf=result2.current.temp_f;
 var textt=result2.current.condition.text;
 console.log(icon+" "+temc+" "+tempf+' '+place+" "+textt);
 var icon2=ad+icon;
 console.log(icon2);
 document.getElementById("place").append(place);
 document.getElementById("text").append(textt);
 document.getElementById("temp").append(temc);
 document.getElementById("temp2").append(tempf);
 document.getElementById("bod").style.backgroundImage=`url(${icon2})`; 
document.getElementById("info").style.display="block";
    } 
    
    catch (error) {
        document.querySelector("span").innerHTML="***Location Entered is not valid***"
    }

    }

}