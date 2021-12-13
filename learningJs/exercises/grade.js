const marks = [80, 80, 50];


function calculateGrade(marks){
    let sum = 0;
    for (let mark of marks)
        sum += mark;
let average = sum / marks.length;
    
    if (average >= 0 && average <= 59 ) return 'F';
    if (average >= 60 && average <= 69 ) return 'D';
    if (average >= 70 && average <= 79 ) return 'C';
    if (average >= 80 && average <= 89 ) return 'B';
    if (average >= 90 && average <= 100 ) return 'A';

    // you can also write this as

    // if (average < 60) return 'F';
    // if (average < 70) return 'D';
}

console.log(calculateGrade(marks));


