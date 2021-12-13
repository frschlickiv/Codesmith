// recursion more times than not requres a BASE CASE

let counter = 0;

function recurse() {
  if (counter === 3) return "done";
  counter++;
  console.log(counter);
  recurse();
}

console.log(recurse());
