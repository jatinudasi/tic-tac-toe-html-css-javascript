
var p1 = document.getElementById("s1");
var p2= document.getElementById("s2");

var pp =  document.getElementById("pp");

 var current="X";
 var count = 0;
 var c1=0;
 var c2=0;
 
 function changeplayer()
 {
      current =(current=="X")?"O" : "X";
 }
function myChange(obj)
{
    if(obj.innerHTML=="")
    {
     obj.innerHTML=(current=="X")? "X":"O";
     count++;
     changeplayer();

    }
   
    if(count>=5)
    {
        
        if(checkwinner())
        {
             var butt=document.querySelectorAll(".bb");
             setTimeout(reset,2000);
             for(var i=0;i<butt.length;i++)
             {
                 butt[i].disabled= true;
             }
        }    //winning function;
    }
}


function checkwinner()
{
    console.log("checkwinner");
    if(
    (_1.innerText=="X" && _2.innerText=="X" && _3.innerText == "X")||
    (_4.innerText=="X" && _5.innerText=="X" && _6.innerText == "X")||
    (_7.innerText=="X" && _8.innerText=="X" && _9.innerText == "X")||
    (_1.innerText=="X" && _4.innerText=="X" && _7.innerText == "X")||
    (_2.innerText=="X" && _5.innerText=="X" && _8.innerText == "X")||
    (_3.innerText=="X" && _6.innerText=="X" && _9.innerText == "X")||
    (_1.innerText=="X" && _5.innerText=="X" && _9.innerText == "X")||
    (_3.innerText=="X" && _5.innerText=="X" && _7.innerText == "X")
    )
    {
       // console.log("winner is x");
     //alert("winner is X");
        pp.innerHTML="Winner Is X";
        
        p1.innerHTML=++c1;
    
        return true;
    }
    else if
    (
        (_1.innerHTML=="O" && _2.innerHTML=="O" && _3.innerHTML == "O")||
        (_4.innerHTML=="O" && _5.innerHTML =="O" && _6.innerHTML == "O")||
        (_7.innerHTML=="O" && _8.innerHTML=="O" && _9.innerHTML == "O")||
        (_1.innerHTML=="O" && _4.innerHTML=="O" && _7.innerHTML == "O")||
        (_2.innerHTML=="O" && _5.innerHTML=="O" && _8.innerHTML == "O")||
        (_3.innerHTML=="O" && _6.innerHTML=="O" && _9.innerHTML == "O")||
        (_1.innerHTML=="O" && _5.innerHTML=="O" && _9.innerHTML == "O")||
        (_3.innerHTML=="O" && _5.innerHTML=="O" && _7.innerHTML == "O")
    ){
        //console.log("winner is O");
        //alert("winner is O");
       pp.innerHTML="Winner Is O";
        p2.innerHTML = ++c2;
       return true;
    }
    else if(count>=9)
    { 
        //console.log("it a tie");
        //alert("it is a tie");
       pp.innerHTML="It Is a Tie";
        return true;
    }
}



function reset()
{
    
    
    var butt=document.querySelectorAll(".bb");
    for(var i=0;i<butt.length;i++)
    {
        butt[i].disabled= false;
        butt[i].innerHTML="";
    }
    count = 0;
    pp.innerHTML="";
    current="X";
    
}