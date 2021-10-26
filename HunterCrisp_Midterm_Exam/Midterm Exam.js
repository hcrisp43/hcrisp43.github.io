// INF 651 VE F2021
// Midterm Exam - 10/11/21 - 10/17/21
// Student name - Hunter Crisp
// Date - 10/11/21
// Link this script file to Midterm Exam.html 
// Answer the questions 1-15
// Run the JavaScript codes and make sure that there are no errors in the console log developer editor.
// Upload the files (Midterm Exam.js and Midterm Exam.html) to Blackboard Midterm exam content area.
// Number of questions - 15
// Points per question - 5
// Total points - 75

//--------------------------------------  start -------------------------------------------------------
console.log(" Midterm Exam 10/11/21 - 10/17/21")
/* 1. Insert a one line statement to remove the string trailing  white spaces
   Display the result using console.log()
*/

// insert the codes here
let str = "     JavaScript is a text-based programming language           "
console.log(str.trim());
/* 2. Declare the variable name "total" with :
      a. decimal value equal to 16.75
      b. Boolean value of false
      c. string value of empty string
      d. integer value of 3

      display the results using console.log()
*/
// insert the codes here
var total = 16.75;
console.log(total);
total = false;
console.log(total);
total = "";
console.log(total);
total = 3;
console.log(total);

/*  3. Declare the variable name "balance = 100, balance = 200" respectively
    using the constant key word "const".
    Flag into the console the error message?
*/

// insert the codes here
const balance = 100;

try {
    const balance = 200;
}
catch (err) {
    //console.log(err);
}

/* 4. Insert a one line statement the alert message "Check your JS syntax/logic errors"
 alert message dialog box should pop-up in the Midterm html page
 // comment the statement error message from question #3
 */
// insert the codes here
alert("Check your JS syntax/logic errors");
 
/* 5. Calculate the number of days difference between two dates 
   Display the number of days difference to the console log
*/
// insert the codes code here
var startDate = new Date("10-11-21");
var endDate = new Date  ("12-31-21");
var diffSec = endDate.getTime() - startDate.getTime();
var diffDay = diffSec / (1000 * 3600 * 24);
console.log("Days difference: " + parseInt(diffDay));


/* 6. Using the  get.month method, display the month of "October " 
directly to the console.
*/
const date_N = new Date();
const months = ["January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December"];
// insert your code here
date_N.setMonth(9);
console.log(months[date_N.getMonth()]);

/* 7. Prompt the user to enter a number. Using the ternary operator 
       validate the conditions of the variable n.
       (if n is equal to zero, then n divide by 10
       else n multiply by 10).
       Flag the result directly to the console.
*/   
// insert the codes here
var n = prompt("Enter a number");
console.log(n == 0 ? n/10: n * 10);

/* 8. Create a do-while loop control statements where:   
      variable number_I = 0, increment the value of number_I, and
      terminate the loop when
      number_I is equal to 5
      Flag the results (number_I) directly to the console.
*/

// insert the codes here.
var number_I = 0;
do {
    console.log(number_I);
    number_I++;
} while (number_I < 5);


/* 9. Using while loop control statements, 
      generate random numbers between 10 to 30
      starting at 5.
      Display the result directly to the console.
*/
// insert the codes here.
var choice = "y";
while(choice == 'y')
{
  console.log(Math.floor(Math.random()*20)+10);
  choice = prompt("Make another random number?(y/n)");
}

/* 10. Create and execute the function name price that
    multiply the (2 arguments)
    function price(qty,amt)
    Display the result directly to the console
    with this message "The total price is  9999)"
*/

// insert the codes here.
function price(qty, amt) {
    console.log("The total price is: " + (qty * amt));
}

price(2,5);

/* 11. Create and execute a factorial function name factor_N (5)
    (if the factor_N is equal to zero or one, default the value to 1)
    Use the for loop statements
    Display the result= 120 directly to the console.  
*/
// insert the codes here
function factor_N(val){
    if(val == 0 || val == 1)
    {
        console.log("Result = 1");
    }

    var total = 1;

    for(var i = 2; i <= val; i++)
    {
        total *= i;
    }

    console.log("Result = " + total);
}
factor_N(5);

/* 12. Create and execute a function name countSpaces(str_U)
    Count the number of spaces in a given string.
    var str_U = " Provide more diskspace to accommodate the entire accounts " 
    Display the total number of spaces = 9 directly to the console.
*/
// insert the codes here
function countSpaces(str_U) {
    var count = 0;
    for(var i = 0; i < str_U.length; i++)
    {
        if(str_U[i] == " ")
        {
            count++;
        }
    }
    console.log("Spaces = " + count);
}
countSpaces(" Provide more diskspace to accommodate the entire accounts ");

/* 13. Create and execute a function name reverse_String(str_K)
     var str_K = "Assignments and due dates schedule"
     Use the split(), reverse () and join() methods
     Display the reverse sentence directly to the console.
*/
// insert the codes here
function reverse_String(str_K) {
    console.log(str_K.split("").reverse().join(""));
}
reverse_String("Assignments and due dates schedule");

/* 14.
   Demonstrate the use of Accessor property (Getter method) and
   display the result directly to the console 

*/
// insert the codes here
const exampleObject = {
    firstName: "Hunter",
    lastName: "Crisp",
    yearsOld: 0,
    get fullName(){
        return (this.firstName + " " + this.lastName);
    },
    set age(n) {
        this.yearsOld = n;
    }
};
console.log(exampleObject.fullName);

/* 15.
   Demonstrate the use of Accessor property (Setter method) and
   display the result directly to the console
*/
// insert the codes here
exampleObject.age = 27;
console.log(exampleObject.yearsOld);
//-----------------------------------  end --------------------------------------------------