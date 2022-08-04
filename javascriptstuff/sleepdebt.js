const getSleepHours = day => {

    switch (day) {
        case 'Mon':
            return 7;
            break;

        case 'Tues':
            return 5;
            break;

        case 'Wed':
            return 6;
            break;

        case 'Thurs':
            return 4;
            break;

        case 'Fri':
            return 7;
            break;

        case 'Sat':
            return 8;
            break;

        case 'Sun':
            return 8;
            break;

        default: 'Error!';
    }

    const getActualSleepHours = () => getSleepHours('Mon') + 
    getSleepHours('Tues') + 
    getSleepHours('Wed') + 
    getSleepHours('Thurs') + 
    getSleepHours('Fri') + 
    getSleepHours('Sat') + 
    getSleepHours('Sun');
    return getActualSleepHours;

};

console.log(getSleepHours('Mon'))
console.log(getSleepHours('Tues'))
console.log(getSleepHours('Wed'))

//Sleepdebt Codecademy Project | John Stewart | 03/08/2022