// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments





// setTimeout(() => {
//   process.stdout.write("\n");
// }, delay);

let args = process.argv.slice(2)

for(const arg of args){
  if (!isNaN(arg) && arg >= 0) { 
    //!isNan -> is not not a number (therefore, is a number and it's a natural number)
    setTimeout(() => {
      process.stdout.write(`ding`); //process.stdout.write('\x07') I cannot hear the sound
    }, arg * 1000);
  }
}