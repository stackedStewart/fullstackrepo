let raceNumber = Math.floor(Math.random() * 1000);


let earlyOrNot = true;


let runnersAge = 23;
    if (runnersAge > 18 && earlyOrNot === true ) {
      raceNumber += 1000;
    }
    if (runnersAge >= 18 && earlyOrNot === true) {
      console.log('Your race will start at 9.30am ' + raceNumber + '!');
    } else if (runnersAge >= 18 && earlyOrNot === false) {
      console.log('Your race will start at 11.00am ' + raceNumber + '!');
    } else if (runnersAge < 18) {
      console.log('Your race will start at 12.30pm ' + raceNumber + '!');
    } else {
       console.log('Go to reception')
    }

    //Raceday Codecademy Project | John Stewart | 02/08/2022