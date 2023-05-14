const dark = document.getElementById('dark');
// const white = document.getElementById('white');
// const randomly = document.getElementById('randomColor'); 

// var head1 = document.getElementById('hCol');
var bgColor = document.getElementById('container');
// var textColor_nav = document.getElementById('navText-Col')


//dark feature
function changeDark(){
    // head1.style.color = "white";
    bgColor.style.backgroundColor = "black";
    // textColor_nav.style.color = "white";
  
}

// //white feature
// function changeWhite(){
//     head1.style.color = "black";
//     bgColor.style.backgroundColor = "white";
//     textColor_nav.style.color = "black";
// }

// //random feature
// function changeRandomly(){
//     let textColor_arr = ['red', 'blue', 'green'];
//     let bg_Color = ['red', 'blue', 'green'];

//     let textcol_pick = Math.floor(Math.random() * textColor_arr.length);
//     let bgCol_pick = Math.floor(Math.random() * bg_Color.length);

//     head1.style.color = textColor_arr[textcol_pick];
//     bgColor.style.backgroundColor = bg_Color[bgCol_pick];
//     textColor_nav.style.color = textColor_arr[textcol_pick];

//     console.log(textColor_arr);
//     console.log(bg_Color);
//     console.log(textcol_pick);
//     console.log(bgCol_pick);
// }



dark.addEventListener('click', changeDark);
// white.addEventListener('click', changeWhite);
// randomly.addEventListener('click', changeRandomly);

