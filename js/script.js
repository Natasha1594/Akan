//A list of the Akan female names from Sunday to Saturday
const femaleakannames = [
    "Akosua",
    "Adwoa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];

//A list of the Akan male names from Sunday to Saturday
const maleakannames = [
    "Kwasi"
    "Kwadwo"
    "Kwabena"
    "Kwaku"
    "Yaw"
    "Kofi"
    "Kwame"
];


//This fetchs data from all the inputs
function fetchformdata() {
let form = document.forms[0];
let day, month, year, gender;

gender = form.gender.value;

day = parseInt(form.day.value);
month = parseInt(form.month.value);
year = parseInt(form.year.value);

return [gender, day, month, year];

}

//Calculating the day of the week from a specific date
function calculateweekday() {
let [dayofmonth, monthofyear, yearofbirth] = birthdate;
let zerobasedcentury, yearofcentury;

}

//Counting days of the month
if (monthofyear <= 2) {
    monthofyear += 12;
    yearofbirth -= 1;
}





