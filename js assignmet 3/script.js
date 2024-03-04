// chapter 10 (if statement)

// q1

var city = "karachi";
if (city === "karachi") {
    console.log("The city of light" , city);
}

// q2

 var x = 2;
 var y = 2
if (x===y) {
    var z = prompt("enter the value of z");
}

// q3

var zipCode = "10010";
if(zipCode === "10010") {
    alert("karachi");
}
else{
    alert("please write correct city");
}

// q4

var x = 1;
if (x===1) {
   console.log(x = 2);
}

// chapter 11 (Comparison Operators)

// q1

var y = 2;
var z = 8;
if (y != z) {
     alert(y != z);
}

// q2

var x = 100;
var t = 67;
if (x>=t) {
    console.log(x>=t);
}

// q3

var y =  23;
if (y != 78) {
    console.log(y !=78);
}
else {
    console.log(y = 25);
}

// chapter 12 (if...Else and ele if statement)

// q1

var x = 6;
var y = 3;
if (x>=y) {
    alert("variable is greater tha pr equal to variable2");
}
else if(x<=y) {
    alert("variable is greater tha pr equal to variable2");
}

// q3

var a =25;
if (a===24) {
    alert("a is 24");
}
else if (a!=24) {
    alert("the correct value of a is 24");

}

// chapter 13 (Testing sets of conditon)

// q4

var w = 23;
var b = 34;
if (w>b) {
    alert("w is greater than b");
}
else if (w<b) {
    alert("w is less than b" );
}

// q5

var firstName = "sadia";
var lastName = "saadi";
var userFirstName = "sadia";
var userLastName = "saadi";
if (firstName ===userFirstName && lastName===userLastName) {
     alert("names match"+ " " + firstName + lastName + "!");
}
else {
    alert("answer is not matched");
}


// chapter 14 ( if statement nested)

// q4

var x = 3;
var y = 3;
if (x===y) {
    alert(true);
}
else if(x<=y) {
    alert(false);
}

// another pdf (user input & conditos statemet)

// q1

var cityName = prompt("enter the city name");
if (cityName.toLowerCase()=== "karachi") { 
    alert ("welcome to the city o lights");
}

// q2

var gender = prompt("enter gender");
if ( gender.toLowerCase()==="male" ) {
    alert("good morning sir");
}
else if (gender.toLowerCase()==="female") {
    alert("good morning mam");
}