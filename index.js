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
var button = document.getElementsByClassName('contentButton')

function changeDark(){

   for(let h_One=0; h_One < h1.length; h_One++){
    h1[h_One].style.color = "red";
   }

   for(let h_Two=0; h_Two < h2.length; h_Two++){
    h2[h_Two].style.color = "red";
   }

   for(let paraLen=0; paraLen < p.length; paraLen++){
    p[paraLen].style.color = "red";
   }

   for(let navLink_Len=0; navLink_Len < navLink.length; navLink_Len++){
    navLink[navLink_Len].style.color = "red";
   }

   for(let buttonLen=0; buttonLen < button.length; buttonLen++){
    button[buttonLen].style.color = "red";
    button[buttonLen].style.backgroundColor = "red";
   }

   body.style.backgroundColor = "red";
   nav.style.backgroundColor = "red";
   navText.style.color = "red";
    
}

console.log(button);


dark.addEventListener('click', changeDark);

