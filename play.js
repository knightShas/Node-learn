const name = 'Max';
let age = 29;
const hasHobby = true;

// Arrow function

const summarizeUser = (userName, userAge, userHobby) =>{
    return(
        'Name is ' + userName + ' age is ' + userAge + ' the user has hobby ' + userHobby
    );
};

console.log(summarizeUser(name,age,hasHobby));
