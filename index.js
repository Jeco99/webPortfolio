const dark = document.getElementById('dark');
const white = document.getElementById('white');
const randomly = document.getElementById('randomColor'); 

var h1 = document.getElementsByTagName('h1');
var h2 = document.getElementsByTagName('h2');
var p = document.getElementsByTagName('p');
var body = document.getElementsByTagName('body')[0];
var nav = document.getElementsByTagName('nav')[0];
var navText = document.getElementById('navText-Col');
var navLink = document.getElementsByClassName('nav-link'); 
var button = document.getElementsByClassName('contentButton');
var icon = document.getElementsByClassName('bi');


function changeDark(){

   for(let h_One=0; h_One < h1.length; h_One++){
    h1[h_One].style.color = "white";
   }

   for(let h_Two=0; h_Two < h2.length; h_Two++){
    h2[h_Two].style.color = "white";
   }

   for(let paraLen=0; paraLen < p.length; paraLen++){
    p[paraLen].style.color = "white";
   }

   for(let navLink_Len=0; navLink_Len < navLink.length; navLink_Len++){
    navLink[navLink_Len].style.color = "white";
   }

   for(let buttonLen=0; buttonLen < button.length; buttonLen++){
    button[buttonLen].style.color = "white";
    button[buttonLen].style.backgroundColor = "black";
    button[buttonLen].style.border = "1px solid white"
   }

   navText.style.color = "white";

   //background
   body.style.backgroundColor = "black";
   nav.style.backgroundColor = "black";
  

   //icon
   for(let icon_Len=0; icon_Len < icon.length; icon_Len++){
    icon[icon_Len].style.color = "white";
   }
 
}


function changeWhite(){

    for(let h_One=0; h_One < h1.length; h_One++){
     h1[h_One].style.color = "black";
    }
 
    for(let h_Two=0; h_Two < h2.length; h_Two++){
     h2[h_Two].style.color = "black";
    }
 
    for(let paraLen=0; paraLen < p.length; paraLen++){
     p[paraLen].style.color = "black";
    }
 
    for(let navLink_Len=0; navLink_Len < navLink.length; navLink_Len++){
     navLink[navLink_Len].style.color = "black";
    }
 
    for(let buttonLen=0; buttonLen < button.length; buttonLen++){
     button[buttonLen].style.color = "black";
     button[buttonLen].style.backgroundColor = "white";
     button[buttonLen].style.border = "1px solid black"
    }
 
    navText.style.color = "black";
 
    //background
    body.style.backgroundColor = "white";
    nav.style.backgroundColor = "white";
 
 
    //icon
    for(let icon_Len=0; icon_Len < icon.length; icon_Len++){
     icon[icon_Len].style.color = "black";
    }
  
 }



dark.addEventListener('click', changeDark);
white.addEventListener('click', changeWhite);
