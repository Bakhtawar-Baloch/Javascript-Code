//Chapter# 1 Alert

alert ("Bakhtawar");
alert ("Baloch");
alert ("balochbakh@gmail.com");
alert ("05527378330");
alert ("ABC123");
alert ("You're learning Javascript!");
alert ("Chapter# 1 Tasks Completed");

//Chapter# 2 Variables

var firstNumber = 5;
var secondNumber = 6;
var thirdNumber = 5*6;
alert (thirdNumber);

var name;
name = "My name is Bakhtawar";
alert (name);

var teamName = "Javascript Team";
alert (teamName);

var bestMan = "Charlie";
var bestMan = "Jonathon"
alert (bestMan);

//Chapter# 3 -> Variables for Numbers

var caseQty;
caseQty = 144;
alert (caseQty);

var num = 9;
var newNumber = num + 10;
alert (newNumber);

var fourthQuestion;
var fourthQuestion = 50 + 30;
alert (fourthQuestion);

var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
alert (orderTotal);

var sixthQuestion = 25;
var sixthQuestion = 25 + 10;
alert (sixthQuestion);

//Chapter# 4 -> Variables illegal and legal names

var productCost = 3.45;
alert (productCost);

var nameOfBand = "Eminem";
alert (nameOfBand);

var legally_named = "My name on legal documents is Bakhtawar";
alert (legally_named);

var bakhtawarBaloch = "Bakhtawar is my documented name";
alert (bakhtawarBaloch);

//legal variables--->
// var camelCase;
// var legalname1;
// var $legalname;
// var legal_name;
// var mySentAlert;

//illegal variables--->
// var .abcrrr;
// var 1abcrrr;
// var alert;

//Chapter# 5 ----> Math Expression 1

// name & symbol of operator for displaying remainder values = modulus %

var num = 20 % 6;
alert (num);

var largeNum = 1000 * 2000;
alert (largeNum);

var oneNum = 500;
var secNum = 50;
var subtractValue = oneNum - secNum;
alert (subtractValue);

var remainderNum = 100 % 8;
alert (remainderNum);

var multiplicationNum = 100 * 8;
alert (multiplicationNum)

//Chapter 6 ----> Math Expression 2

var x = 10;
var x = x++;
alert (x)

var x = 100;
var x = --x;
alert (x);

var x = 50;
var y = x++;
alert (y);

var y = 50;
var z = --y;
alert (z);

num = 50;
newNumber = num--;
alert (newNumber);

x = 40;
y = x++;
alert (y);

c = 35;
d = ++c;
alert (d);

//Chapter 7 -----> Math Expression 3

var calculatedNum1 = 2 + (2 * 6);
alert (calculatedNum1);

var calculatedNum2 = (2 + 2) * 6;
alert (calculatedNum2);

var calculatedNum3 = (2 + 2) * (4 + 2);
alert (calculatedNum3);

var calculatedNum4 = ((2 + 2) * 4) + 2;
alert (calculatedNum4);

var calculatedNum5 = (2 + 2 + 10) * 4;
alert (calculatedNum5);

var calculatedNum6 = 2 + (2 * 4) + 10;
alert (calculatedNum6);

var calculatedNum7 = ((4 * 4) / 2) / 2;
var calculatedNum8 = ++calculatedNum7
alert (calculatedNum8);

//Chapter# 8 ----> Concatenating Text Strings

var number = "2" + "2";
alert (number);
//answer--> "22"

var message = ("Hello, " + "Dolly");
alert (message);
//answer --> "Hello, Dolly"

alert ("33" + 3);
//answer--> "333"

alert ("Pakistan, " + "Zindabad");
//answer --> "Pakistan Zindabad"

var abc = ("String Number, " + 2 + 2);
alert (abc);
//answer --> "String Number 22"

var one = ("I am a ");
var two = ("Pakistani");
var three = one + two;
alert (three);
//answer --> "I am a Pakistani"

//Chapter# 9 ---> Prompts

var userName = prompt("Enter first name");
alert (userName);

var country = "Country?";
var defaultAnswer = "China";
var countryQuestion = prompt(country, defaultAnswer);
alert (countryQuestion);


var yourName = prompt("Enter your name");
alert(yourName);


var yourAge = prompt("How old are you?");
alert (yourAge);

var learning = ("Are you interested in learning programming?");
var answer = "Yes I am!";
var completeAnswer = prompt (learning, answer);
alert (completeAnswer);

var learning2 = ("Have you completed javascript?");
var answer2 = ("No, I haven't!");
var completeAnswer2 = prompt (learning2, answer2);
alert (completeAnswer2);

//Chapter 10 ----> If Statements

var city = prompt ("Which city is known as the city of lights?");
if (city === "Karachi") {
alert ("The City of Lights");
}

var x = prompt ("Enter value of x");
var y = prompt ("Enter value of y");
if (x === y) { 
    alert ("y is equal to x");
    var z = prompt ("Enter value of z");
    alert ("correct answer");
}

var zipCode = prompt ("Enter Zipcode");
if (zipCode === "10010") { 
    alert ("Karachi");
}
if (zipCode !== "10010") { 
    alert ("Please write correct city code");
}

var a = prompt ("Enter Number");
if (a === "500") { 
    var a = 1000;
    alert ("Variable a value is now changed to 1000");
}

//Chapter 11 ---->

var abc = 10
var bcd = 15
if (abc !== bcd) {
    alert ("Unequal");
}

a = 50
b = 30
if (a >= b) {
    alert (a + " is greater than " + b);
}

var ab = prompt ("Enter value of ab");
if (ab !== 100) { 
    var ab = 50;
    alert ("ab is now 50");
}

if (5 !== 6) {
    alert ("Congratulations Now");
}

var firstName = prompt ("What is your first name?");
if (firstName !== "Bakhtawar") {
    alert ("No Match");
}


//Chapter 12 ---> if/else statements

var e = prompt ("Enter value for e");
var f = prompt ("Enter value for f");
if (e >= f) {
    alert ("e is greater than equal to f");
}
else {
    alert ("e is NOT greater than equal to f");
}


var marksObtained = +prompt ("Enter your marks to check your exam grade");
var totalMarks = 100;
var percentage = (marksObtained / totalMarks) * 100;
if (percentage >= 80) {
    alert ("Your exam grade is A");
}
else if (percentage >= 50) {
    alert ("Your exam grade is B");
}
else {
    alert ("Your exam grade is F");
}


var a = +prompt ("Type the value for a")
if (a === 10) {
    alert ("a is 10");
}
else {
    alert ("The correct value of a is " + a);
}


var city = prompt ("Enter your city name");
if (city === "Karachi") {
    alert ("It is Karachi");
}
else if (city === "Lahore") {
    alert ("It is Lahore");
}
else {
    alert ("Your city is neither Karachi nor Lahore");
}



//Chapter # 13 -----> else / if / conditions

var a = 50;
var b = 50;
var c = 70;
var d = 70;
if (a === b && c === d) {
    alert ("The condition is True");
}

var a = 30;
var b = 30;
var c = 25;
var d = 50;
if (a === b || c === d) {
    alert ("Either or both conditions are True");
}

var userName = "Hamza";
var age = 50;
if (userName === "Hamza" || userName === "Arsalan" && age < 60) {
    alert ("Conditions meet");
}

var asd = 10;
var bsd = 15;
if (asd < bsd || asd > bsd) {
    alert ("Condition Resolved");
}

var nameOne = "Bakhtawar";
var nameSecond = "Baloch";
var z = prompt ("What is your first name?");
var w = prompt ("What is your last name?");
if (nameOne === z && nameSecond === w) {
    alert ("Both Names Match!");
}
else {
    alert ("Names Do Not Match!");
}



//Chapter 14

var password = prompt ("Enter password");
if (password !== null) {
    if (password < 5) {
        alert ("Password must be greater than 5");
    }
    else {
        alert ("OK");
    }
}

var a = 1;
var c = "Max";
if (a === 1) {
    if (c === "Max") {
        alert ("Ok");
    }
}


var a = 1;
var c = "Max";
if (a === 1 && c === "Max") {
    alert ("Ok the condition works");
    }

var z = 10;
var w = 10;
if (z === w) {
    if (z <= w) {
        alert ("First variable is equal to the second variable");
    }
}
else {
    alert ("Doesnt work");
}



//Chapter 15

let myArray = [];

let anotherArray = ["Bob", 123, 53, 100];
alert (anotherArray[0]);

var alphabet = ["h", "i", "j", "k"];
alert (alphabet[2]);

var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
var alphabetLength = alphabet.length;
alert ("The length of Array is " + alphabetLength);

var newArray = ["Bob"];
newArray[1] = "Stanley";
newArray[2] = "Mathew";
alert ("the new elements added are " + newArray[1] + " & " + newArray[2]);


//----XXX---XXX------






































