// TODO: put hover on the nav
// TODO: the button put a hover that change color


const dark = document.getElementById('dark');
const white = document.getElementById('white');
const randomly = document.getElementById('randomColor'); 
const reset = document.getElementById('clear');

var h1 = document.getElementsByTagName('h1');
var h2 = document.getElementsByTagName('h2');
var h5 = document.getElementsByTagName('h5');
var p = document.getElementsByTagName('p');
var body = document.getElementsByTagName('body')[0];
var nav = document.getElementsByTagName('nav')[0];
var navText = document.getElementById('navText-Col');
var navLink = document.getElementsByClassName('nav-link'); 
var button = document.getElementsByClassName('contentButton');
var icon = document.getElementsByClassName('bi');
var bgDropdown = document.getElementsByClassName('bgDropdown');
var offCanvas_bg = document.getElementsByClassName('offCanvas-bg')[0];
var offCanvas_title = document.getElementById('offcanvasNavbarLabel');

//close button
var btnClose = document.getElementById('btnClose');

//card
var card = document.getElementsByClassName('card');


// date
var datePrint = document.getElementsByClassName('datePrint')[0];
var dateDiv = document.createElement('div');


var ranColor = {
        'blue' : {
            'oxford-blue': '#0B2447',
            'indigo': '#19376D',
            'blue-yonder': '#576CBC',
            'non-photo-blue': '#A5D7E8'
        } , 
        
        'red' : {
            'carminePink':'#ee4540',
            'frenchRaspberry':'#c72c41',
            'claret':'#801336' ,
            'brownChocolate':'#510a32', 
            'darkPurple':'#2d142c;'
        }
}



function changeDark(){

   for(let h_One=0; h_One < h1.length; h_One++){
    h1[h_One].style.color = "white";
   }

   for(let h_Two=0; h_Two < h2.length; h_Two++){
    h2[h_Two].style.color = "white";
   }

   for(let h_Five=0; h_Five < h2.length; h_Five++){
    h5[h_Five].style.color = "white";
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
    bgDropdown[bgDropdown_Len].style.backgroundColor = "black";
    bgDropdown[bgDropdown_Len].style.border = "1px solid white";
    }

    for(let card_Len = 0; card_Len < card.length; card_Len++){
        card[card_Len].style.backgroundColor = "black";
        card[card_Len].style.color = "white";
        card[card_Len].style.border = "1px solid white";
    }

   navText.style.color = "white";
   offCanvas_title.style.color = "white";

   //button close
    btnClose.style.backgroundColor = "white";
    btnClose.style.opacity = "5";
    btnClose.style.color = "white";
    

   //background
   body.style.backgroundColor = "black";
   nav.style.backgroundColor = "black";
   offCanvas_bg.style.backgroundColor = "black";

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

    for(let h_Five=0; h_Five < h2.length; h_Five++){
        h5[h_Five].style.color = "black";
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
     button[buttonLen].style.border = "1px solid black";
    }

    for(let bgDropdown_Len = 0; bgDropdown_Len < bgDropdown.length; bgDropdown_Len++){
        bgDropdown[bgDropdown_Len].style.color = "black";
        bgDropdown[bgDropdown_Len].style.backgroundColor = "white";
        bgDropdown[bgDropdown_Len].style.border = "1px solid black";
    }

    for(let card_Len = 0; card_Len < card.length; card_Len++){
        card[card_Len].style.backgroundColor = "white";
        card[card_Len].style.color = "black";
        card[card_Len].style.border = "1px solid black";
    }

    navText.style.color = "black";
    offCanvas_title.style.color = "black";

    //button close
   btnClose.style.backgroundColor = "white";
   btnClose.style.opacity = "5";
   btnClose.style.color = "white";
 
    //background
    body.style.backgroundColor = "white";
    nav.style.backgroundColor = "white";
    offCanvas_bg.style.backgroundColor = "white";
 
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

    for(let h_Five=0; h_Five < h2.length; h_Five++){
        h5[h_Five].style.color = ranColor['blue']['blue-yonder'];
    }
 
    for(let paraLen=0; paraLen < p.length; paraLen++){
     p[paraLen].style.color = ranColor['blue']['blue-yonder'];
    }
 
    for(let navLink_Len=0; navLink_Len < navLink.length; navLink_Len++){
     navLink[navLink_Len].style.color = ranColor['blue']['non-photo-blue'];
    }
 
    for(let buttonLen=0; buttonLen < button.length; buttonLen++){
     button[buttonLen].style.color = ranColor['blue']['blue-yonder'];
     button[buttonLen].style.backgroundColor = ranColor['blue']['non-photo-blue'];
     button[buttonLen].style.border = "1px solid black"
    }

    for(let card_Len = 0; card_Len < card.length; card_Len++){
        card[card_Len].style.backgroundColor = ranColor['blue']['oxford-blue'];
        card[card_Len].style.color = ranColor['blue']['blue-yonder'];
        card[card_Len].style.border = "1px solid black";
    }
 
    navText.style.color = ranColor['blue']['blue-yonder'];
    offCanvas_title.style.color = ranColor['blue']['blue-yonder'];

     //button close
     btnClose.style.backgroundColor = "white";
     btnClose.style.opacity = "5";
     btnClose.style.color = "white";
 
    //background
    body.style.backgroundColor = ranColor['blue']['oxford-blue'];
    nav.style.backgroundColor = ranColor['blue']['oxford-blue'];
    offCanvas_bg.style.backgroundColor = ranColor['blue']['oxford-blue'];
 
    //icon
    for(let icon_Len=0; icon_Len < icon.length; icon_Len++){
     icon[icon_Len].style.color = ranColor['blue']['indigo'];;
    }
  
 }

 function changeClear(){
    changeWhite()
 }



// added date feature
const dateToday = () => {
    const toDay = new Date();

    const MonthName = [
        "January", "February",
        "January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October",
        "November", "December"
    ]

    let month = toDay.getMonth();
    let day = toDay.getDate();
    let year = toDay.getFullYear();

    dateDiv.innerHTML += MonthName[month] + " " + day + "," + year;
    dateDiv.style.color = "red";
    dateDiv.style.fontSize = "50px";

    datePrint.append(dateDiv);
}

dark.addEventListener('click', changeDark);
white.addEventListener('click', changeWhite);
randomly.addEventListener('click', changeBlue);
reset.addEventListener('click', changeClear);

//by default
changeWhite();
dateToday();







