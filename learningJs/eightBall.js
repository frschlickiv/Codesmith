const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput==='rock' || userInput === 'scissors' || userInput === 'paper') {
    return userInput;
    } else {
      console.log('Error!');
    }
    }
    
    const getComputerChoice = () => {
     const randomNumber = Math.floor(Math.random()* 3 );
    switch (randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'scissors';
      case 2:
        return 'paper';
    
    }
    };
    
    let determineWinner = (userChoice, computerChoice) => {
      if (userChoice === computerChoice) {
        return 'Game is a tie!';
      }
      if (userChoice === 'rock'){
       if (computerChoice === 'paper'){
         return 'Sorry! Computer Won';
       }else{
         return 'Congrats, you won!';
       }
      }
      if (userChoice === 'paper'){
        if (computerChoice === 'scissors'){
          return 'Sorry! Computer won!'
        }else{
          return 'Congrats, you won';
        }
      }
      if (userChoice === 'scissors'){
        if (computerChoice === 'rock'){
          return 'Sorry! Computer won!';
        }else{
          return 'Congrats, you won!';
        }
      }
    };
    
    const playGame = () => {
      const userChoice = getUserChoice('paper');
      const computerChoice = getComputerChoice();
      console.log (`You threw: ${userChoice}!`);
      console.log (`Computer threw: ${computerChoice}!`);
    
    console.log(determineWinner(userChoice, computerChoice));
    };
    playGame();