//Generate a password group
const passwords = ["cookoo445", "hilBill76", "shiftschiff!", "marketShare@12"];

function validatePassword(passwords){
    //User a regular expression to create the string test condition
    const regex = /^[a-zA-Z0-9]{8,20}$/;
    for(let i = 0; i < passwords.length;i++){
        if(regex.test(passwords[i])){
            console.log(`${passwords[i]} is valid`);
        }else{
            console.log(`${passwords[i]} is invalid`);
        }
    }
}
validatePassword(passwords);