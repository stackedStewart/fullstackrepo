
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
  return userInput;
} else {
  console.log('Error! Pick Rock, paper or scissors');
}

}
//console.log(getUserChoice('Paper'));
//console.log(getUserChoice('fork'));

let getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3); 


    if(randomNum === 0) {
      return 'rock';
    } else if (randomNum === 1) {
      
      return 'paper';
    } else if (randomNum === 2) {
      return 'scissors';
    } else {
      return'Error!';
    }
  };


  /*switch (randomNum) {
    case 0:
    return 'rock';
    case 1:
    return  'scissors';
    case 2: 
    return 'paper';

  };
}*/
  

//console.log(getComputerChoice());
//console.log(getComputerChoice());
//console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return 'You won!'
  }
 
     if (userChoice === computerChoice) {
        return 'The Game is a Draw!';
    };
    
    if  (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer has kicked your arse!';
      } else {
        return 'You beat the computer!';
      };
    };

    if  (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer has kicked your arse!';
      } else {
        return 'You beat the computer!';
      };
    };

    if  (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer has kicked your arse!';
      } else {
        return 'You beat the computer!';
      };
    };
}


const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(`You chose: ${userChoice}.`);
  console.log(`The computer chose: ${computerChoice}.`)
  console.log(determineWinner(userChoice, computerChoice));

}

playGame();

//Rock Paper Scissors Codecademy Project | John Stewart | 03/08/2022