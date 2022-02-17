// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

let args = process.argv.slice(2)
let numOfArgs = args.length; 
let lastOfArgs = args[args.length - 1]; //Helps me to find the last item written in the terminal


let delay = 1000

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

//I don't know why it prints everything properly, even the new line, but leaves three spaces



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


