//get the date.js file

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

var ranColor = {
        'blue' : {
            'oxford-blue': '#0B2447;',
            'indigo': '#19376D;',
            'blue-yonder': '#576CBC;',
            'non-photo-blue': '#A5D7E8;'
        } , 
        
        'red' : {
            'carminePink':'#ee4540;',
            'frenchRaspberry':'#c72c41;',
            'claret':'#801336' ,
            'brownChocolate':'#510a32', 
            'darkPurple':'#2d142c;'
        }
}


//indi pa ta na dynamic
var bgDropdown = document.getElementsByClassName('bgDropdown');


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

   for(let bgDropdown_Len = 0; bgDropdown_Len < bgDropdown.length; bgDropdown_Len++){
    bgDropdown[bgDropdown_Len].style.color = "white";
}

   navText.style.color = "white";

   //background
   body.style.backgroundColor = "black";
   nav.style.backgroundColor = "black";

//    bgDropdown[1].style.backgroundColor = "black";
//    bgDropdown[2].style.backgroundColor = "white";

   //icon
   for(let icon_Len=0; icon_Len < icon.length; icon_Len++){
    icon[icon_Len].style.color = "white";
   }

   //remove date
   datePrint.removeChild(dateDiv);
 
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

    for(let bgDropdown_Len = 0; bgDropdown_Len < bgDropdown.length; bgDropdown_Len++){
        bgDropdown[bgDropdown_Len].style.color = "dark";
    }

    navText.style.color = "black";
 
    //background
    body.style.backgroundColor = "white";
    nav.style.backgroundColor = "white";

    // bgDropdown[2].style.backgroundColor = "white";
    // bgDropdown[1].style.backgroundColor = "white";
 
 
    //icon
    for(let icon_Len=0; icon_Len < icon.length; icon_Len++){
     icon[icon_Len].style.color = "black";
    }

  
 }

 function changeBlue(){
     for(let h_One=0; h_One < h1.length; h_One++){
     h1[h_One].style.color = ranColor['blue']['blue-yonder'];
    }
 
    for(let h_Two=0; h_Two < h2.length; h_Two++){
     h2[h_Two].style.color = ranColor['blue']['blue-yonder'];
    }
 
    for(let paraLen=0; paraLen < p.length; paraLen++){
     p[paraLen].style.color = ranColor['blue']['blue-yonder'];
    }
 
    for(let navLink_Len=0; navLink_Len < navLink.length; navLink_Len++){
     navLink[navLink_Len].style.color = ranColor['blue']['non-photo-blue'];
    }
 
    for(let buttonLen=0; buttonLen < button.length; buttonLen++){
     button[buttonLen].style.color = ranColor['blue']['blue-yonder'];
     button[buttonLen].style.backgroundColor = ranColor['blue']['blue-yonder'];
     button[buttonLen].style.border = "1px solid black"
    }
 
    navText.style.color = ranColor['blue']['blue-yonder'];
 
    //background
    body.style.backgroundColor = ranColor['blue']['oxford-blue'];
    nav.style.backgroundColor = ranColor['blue']['oxford-blue'];

    // bgDropdown[2].style.backgroundColor = "white";
    // bgDropdown[1].style.backgroundColor = "white";
 
 
    //icon
    for(let icon_Len=0; icon_Len < icon.length; icon_Len++){
     icon[icon_Len].style.color = ranColor['blue']['indigo'];;
    }
  
 }


 // added date feature

// var datePrint = document.getElementsByClassName('datePrint')[0];
// var dateDiv = document.createElement('div');


// const toDay = new Date();

// const MonthName = [
//     "January", "February", "March", "April", "May",
//     "June", "July", "August", "September", "October",
//     "November", "December"
// ]

// let month = toDay.getMonth();
// let day = toDay.getDate();
// let year = toDay.getFullYear();

// dateDiv.innerHTML += MonthName[month] + " " + day + "," + year;
// dateDiv.style.color = "red";
// dateDiv.style.fontSize = "50px";

// datePrint.append(dateDiv);

// console.log(dropdown_Text);

dark.addEventListener('click', changeDark);
white.addEventListener('click', changeWhite);
randomly.addEventListener('click', changeBlue);







