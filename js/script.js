//A list of the Akan female names from Sunday to Saturday
const femaleakannames = [
    "Ama",
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua"
    
    
    
];

//A list of the Akan male names from Sunday to Saturday
const maleakannames = [
    "Kwame",
    "Kofi",
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw"
    
    
    
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
function calculateweekday(birthdate) {

let [dayofmonth, monthofyear, yearofbirth] = birthdate;
let zerobasedcentury, yearofcentury;

//Counting days of the month
if (monthofyear <= 2) {
    monthofyear += 12;
    yearofbirth -= 1;
}

//Splitting the year into century code to year code
zerobasedcentury = parseInt(yearofbirth / 100);
yearofcentury = yearofbirth % 100;

let dayofweek = 
(dayofmonth + 
    parseInt(
        2.6 * (monthofyear + 1) + 
        yearofcentury + 
        parseInt(yearofcentury / 4) +
        parseInt(zerobasedcentury / 4) + 
        5 * zerobasedcentury
    )) % 7;

//Day of week indexing
return dayofweek;
}
//Derives the user gender from the Akan names
function deriveakanname() {
    let formdata = fetchformdata();
    let userbirthdate, usergender, dayofweek;


    [usergender, ...userbirthdate] = formdata;
    dayofweek = calculateweekday(userbirthdate);


    //It indicates the day of the week derived from the akan name
    if ([dayofweek] == 0) {
        var dayW = "Saturday"; 
    } else if ([dayofweek] == 1) { 
        var dayW = "Sunday";
    } else if ([dayofweek] == 2) { 
        var dayW = "Monday";
    } else if ([dayofweek] == 3) { 
        var dayW = "Tuesday";
    } else if ([dayofweek] == 4) { 
        var dayW = "Wednesday";
    } else if ([dayofweek] == 5) { 
        var dayW = "Thursday";
    } else { 
        var dayW = "Friday";
    }
         


    
    //This displays to the user their akan name and day of the week they were born

    if (usergender === "Male") {
        alert("Accoriding to the system,\nYour Akan name is " + maleakannames[dayofweek]+ ". \nThe day of the week you were born, was on a " + dayW + ".");

    } else {
        alert("According to the system, \nYour Akan name is " + femaleakannames[dayofweek]+ ". \nThe day of the week you were born, was on a " + dayW + ".");
    }


    //This clears the text boxes after retriving the values

    return false;



}
  
     



