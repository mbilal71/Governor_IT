/*
1.
    Install [Node.js] (https://nodejs.org/en/),
    [TypeScript] (https://www.typescriptlang.org/download) 
    VS Code (https://www.code.visualstudio.com)
    install on your computer.

*/


//////////////////////////////////////////////////////////////////



/*

2.Personal Message:


Store a person’s name in a variable, and print a message to that person. Your message should 
be simple, such as, “Hello Eric, would you like to learn some Python today?”
*/

// // Print 

// let personName : string = "eric";

// // Print 

// console.log("Hello "+ personName + ",Would you like to learn PYTHON today?");



//////////////////////////////////////////////////////////////////



/*

3. Name Cases:

Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase.
*/

// let personName: string = "eric";

// // lower case
// console.log(personName.toLowerCase());

// // UPPER CASE
// console.log(personName.toUpperCase());



//////////////////////////////////////////////////////////////////




/*

4. Famous Quote:

Find a quote from a famous person you admire. Print the quote and the name of its author. 
Your output should look something like the following, including the quotation marks:
Albert Einstein once said, “A person who never made a mistake never tried anything new.”
*/

// // famous person
// let famousPerson : string = "Albert Einstein";

// // Print

// console.log(famousPerson + " once said,“A person who never made a mistake never tried anything new.”");




//////////////////////////////////////////////////////////////////




/*

5. Famous Quote 2:

Repeat Exercise 4, but this time store the famous person’s name in a variable called 
famous_person. Then compose your message and store it in a new variable called message. Print your 
message.
*/

// // famous person

// let famous_person: string = "Albert Einstein";

// // Quote

// let message: string = "“A person who never made a mistake never tried anything new.”";

// // Print

// console.log(famous_person + " once said," + message);




//////////////////////////////////////////////////////////////////




/*

6. Stripping Names:

Store a person’s name, and include some whitespace characters at the beginning and end of 
the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name
*/

// // Normal name

// let normalName: string = "Hassan";


// // Using "\t"

// let name1: string = "\tHassan";

// // Using "\n"

// let name2: string = "My name is \nHassan";

// // Print

// console.log(normalName)
// console.log(name1)
// console.log(name2)


//////////////////////////////////////////////////////////////////

/*

7. Stripping Names:

Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
 */

// // Addition

// let addition: number = 4 + 4;

// // Subtraction

// let subtraction: number = 10 - 2;

// // Multiplication

// let multiplication: number = 2 * 4;

// // Division

// let division: number = 16 / 2;

// // Print

// console.log("Addition: " + addition)

// console.log("Subtraction: " + subtraction)

// console.log("Multiplication: " + multiplication)

// console.log("Division: " + division)



//////////////////////////////////////////////////////////////////



/*

8. You should create four lines that look like this:
console.log(5 + 3)
 Your output should simply be four lines with the number 8 appearing once on each line.

*/

// // Print

// console.log(5 + 3);
// console.log(4 * 2);
// console.log(16 / 2);
// console.log(15 - 7);



//////////////////////////////////////////////////////////////////



/*

9. Favorite Number: 
Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

*/

// // Variable

// let favNumber : number = 14;

// // Print

// console.log("My favorite number is " + favNumber);



//////////////////////////////////////////////////////////////////




/*
10. Adding Comments: 
Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
*/


// /*
// Aurthor : [Ahmad Hassan]
// Date: 2024-02-17
// */

// // A program that tells my Favorite Number.

// // Variable

// let favNumber : number = 14;

// // Print

// console.log("My favorite number is " + favNumber);



// /*
// Aurthor : [Ahmad Hassan]
// Date: 2024-02-17
// */

// // A program that prints a Person's Name.

// // Print 

// let personName : string = "eric";

// // Print 

// console.log("Hello "+ personName + ",Would you like to learn PYTHON today?");




//////////////////////////////////////////////////////////////////



/*
11. Names: 
Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
*/

// // Names

// let names:string[]=[
//     "Ahmad Zulfikar",
//     "Zeeshan Zafar",
//     "Ehtisham Arshad",
//     "Zain ul Haq"
// ];

// // Length

// console.log(names.length)

// // Print each person’s name by accessing each element in the list, one at a time.


// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);





//////////////////////////////////////////////////////////////////




/*
12. Greetings: 
Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
*/

// let names:string[]=[
//     "Ahmad Zulfikar",
//     "Zeeshan Zafar",
//     "Ehtisham Arshad",
//     "Zain ul Haq"
// ];

// // We make function for it.

// function greetings(arrayNames: string[]){

// // Greeting 

// let greeting = "Hello ";

// // Using .ForEach so it will cover all the names of array.
// arrayNames.forEach((name: string) =>{

//     console.log(greeting + name);

// })    
// };

// greetings(names);




//////////////////////////////////////////////////////////////////




/*
13. Your Own Array: 
Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of
statements about these items, such as 
“I would like to own a Honda motorcycle.”
*/


// // Favorite Transportation

// let favTrans: string[] = [
//     "Mercedes G-63 {G-Wagon}",
//     "Yamaha 125-YBR",
//     "Toyota Supra-Mk-4",
//     "Honda 125"
// ]

// // Print
// favTrans.forEach(item => {
//     console.log("I would like to own a " + item);
// })





//////////////////////////////////////////////////////////////////


/*
14. Guest List: 
If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/

// // Guests

// const guestList = [
//     { name: "Muhammad Bilal Sidique",
//      status: "deceased"
//     },
//     { name: "Taha Bilal",
//     status: "living"
//     },
//     { name: "Ahmad Hussain",
//      status: "deceased" 
//     }
// ];
  
// // Function of Invitations

// function sendInvits(){
//     guestList.forEach(guest => {
//       let message;
//       if (guest.status === "living") {
//         message = `Dear ${guest.name}, you are cordially invited to dinner. Please RSVP at your earliest convenience.`;
//       } else {
//         message = `Dear ${guest.name}, we would be honored to have you join us for dinner, in spirit if not in person.`;
//       }
//       console.log(message);
//     });
//   }
  

// sendInvits();
  