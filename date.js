//add date
var datePrint = document.getElementsByClassName('datePrint')[0];
var dateDiv = document.createElement('div');
const toDay = new Date();

const MonthName = [
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