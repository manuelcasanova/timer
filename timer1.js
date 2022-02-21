// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

let args = process.argv.slice(2)
let lastOfArgs = args[args.length - 1]; //Helps me to find the last item written in the terminal which I will use to write the new line

let delay = 1000 //I decided to declare this variable so I can easily change the time without modifying the function

for(const arg of args){
  
  if (!isNaN(arg) && arg >= 0) { 
    //!isNan -> is not "not a number" (therefore, is a number) and it's a natural number)
    setTimeout(() => {
      process.stdout.write(`ding `); //process.stdout.write('\x07') I cannot hear the sound
    }, arg * delay);
  }
}
setTimeout(() => {               
  process.stdout.write("\n");
}, lastOfArgs * delay + 1); //+1 so the new line happens after the last arg





/*
Alternative suggested, but uses arrow function and forEach loop and I feel I control more the code above
*/

// process.argv.slice(2).forEach(arg => {
//   if (!isNaN(arg) && arg >= 0) { 
//     //!isNan -> is not not a number (therefore, is a number and it's a natural number)
//     setTimeout(() => {
//       process.stdout.write(`*`); //process.stdout.write('\x07') I cannot hear the sound
//     }, arg * 1000);
//   }
// });

//The code below is like the first one, but makes the sound on the terminal

// let lastOfArgs2 = args[args.length - 1]; //Helps me to find the last item written in the terminal which I will use to write the new line

// let delay2 = 1000 //I decided to declare this variable so I can easily change the time without modifying the function

// for(const arg of args){
  
//   if (!isNaN(arg) && arg >= 0) { 
//     setTimeout(() => {
//       process.stdout.write('\x07'); //The sound plays on the terminal, not on VSCODE
//     }, arg * delay);
//   }
// }
// setTimeout(() => {               
//   process.stdout.write("\n");
// }, lastOfArgs2 * delay2 + 1);