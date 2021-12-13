//logical AND &&
//returns TRUE if both OPERANDS are TRUE

//console.log(true && false);

// real world use case: 
//Lets see if the applicant's credit score is good enough to help them get the new card
/*
let highIncome = true;
let goodCreditScore = true;
let eligableForLoan = highIncome && goodCreditScore;
console.log(eligableForLoan);
*/


//LOGICAL OR ||
//Returns TRUE if one of the operands is True
let highIncome = false;
let goodCreditScore = false;
let eligableForLoan = highIncome || goodCreditScore;
console.log('Eligable', eligableForLoan);


//not operator (!)

let applicationRefused = !eligableForLoan; 
console.log('Application Refused', applicationRefused);