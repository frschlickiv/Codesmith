function multiplyBy2 (n){
    return n * 2;
}

const output = multiplyBy2 (4)

//Key Ideas of recursion. 
Always ask yourself. 'How is this task self-similar?'



function sumNaturals (n) {
    if (n <= 0) return 0;

    else return n + sumNaturals(n-1);

    const output = sumNaturals(3)
}