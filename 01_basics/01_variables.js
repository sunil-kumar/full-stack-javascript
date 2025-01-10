const accountId = 14453
let accountEmail = 'sunil@gmail.com'
var accountPassword = "12345"
accountCity = "Pune"

//accountId = 23421
//console.log(accountId);
 
//accountEmail = "singh@gmail.com"
//console.log(accountEmail);

//accountPassword = '67889'
//console.log(accountPassword);

//accountCity = "Bengaluru"
//console.log(accountCity);

/*
 Prefer not to use var
 Because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);